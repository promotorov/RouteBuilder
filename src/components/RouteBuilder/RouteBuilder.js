import React, { useState } from 'react';
import { InputGroup, Input, Container, Col, Row } from 'reactstrap';
import DragableList from '../List/DragableList';
import { dragArrayItem } from '../../common/index';
import { YMaps, Map, Placemark, Polyline } from 'react-yandex-maps';

function handleKeyPress(event) {
  // Enter
  if (event.charCode === 13) {
    if(event.target.value.trim().length === 0)
      return;
    this.setPoints([...this.points, event.target.value])
    this.setMarks([...this.marks, this.mapRef.getCenter()])
    event.target.value = ""
  }
}

function handleItemDeleteClick(index) {
  const copiedPoints = [...this.points]
  copiedPoints.splice(index, 1);
  const copiedMarks = [...this.marks]
  copiedMarks.splice(index, 1);
  this.setMarks(copiedMarks);
  this.setPoints(copiedPoints);
}

function updatePoints(points, draggedIndex, draggedOverIndex) {
  this.setPoints(points);
  this.setMarks(dragArrayItem(this.marks, draggedIndex, draggedOverIndex));
}

function handleMarkDrag(index, event) {
  const newCoor = event.get('target').geometry.getCoordinates();
  const copiedMarks = [...this.marks];
  copiedMarks[index] = newCoor;
  this.setMarks(copiedMarks);
}

function RouteBuilder() {

  const [points, setPoints] = useState([]);
  const [marks, setMarks] = useState([]);
  const [isReady, setReady] = useState(false);

  let mapRef;

  return (
    <div>
      <Container>
        <Row style={{'padding-top': '20px'}}>
          <Col sm={6}>
            <InputGroup>
              <Input
                placeholder="Новая точка маршрута"
                onKeyPress={event => handleKeyPress.call({points, setPoints, marks, setMarks, mapRef}, event)}
                disabled={!isReady}
              />
            </InputGroup>
            <DragableList
              data={points}
              onDelete={handleItemDeleteClick.bind({points, setPoints, marks, setMarks})}
              onUpdate={updatePoints.bind({setPoints, setMarks, marks})}
            />
          </Col>
          <Col sm={6}>
            <YMaps>
              <Map
                instanceRef={ref => mapRef = ref}
                defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                onLoad={() => setReady(true)}
                width={'100%'}
              >
                {
                  marks.map((mark, index) => {
                    return (
                      <Placemark
                        geometry={mark}
                        options={{draggable: true}}
                        onDrag={event => handleMarkDrag.call({marks, setMarks}, index, event)}
                        properties={{balloonContentBody: points[index]}}
                        modules={['geoObject.addon.balloon']}
                      />)
                  })
                }
                {
                  marks.length >= 2 && <Polyline geometry={marks}/>
                }
              </Map>
            </YMaps>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RouteBuilder;