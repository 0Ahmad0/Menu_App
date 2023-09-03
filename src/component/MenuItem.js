import {Card,Row,Col} from 'react-bootstrap';
import Zoom  from 'react-reveal/Zoom';
function MenuItem({itemsData}){
    return(
     itemsData.length?(
      itemsData.map((item,index)=>{
        return(
          <Zoom>
          <Card key={index} className='d-flex mb-2 mt-2'>
          <Row>
          <Col sm='3'>
           <Card.Img variant="top" src={item.image} className='image-item'/>
           </Col>
           <Col sm='9'>
           <Card.Body>
            <div className='d-flex justify-content-between'>
            <div className='title-menu-item'>
            {item.title}
               </div>
               <div className='price-menu-item'>
               {item.price}
               </div>
            </div>
             <Card.Text >
             <div className='subtitle-menu-item'>
            {item.subtitle}
             </div>
             </Card.Text>
           </Card.Body>
           </Col>
          </Row>
         </Card>
         </Zoom >
        )
      })
     ):<div>
      <h1 className='text-center'>لا يوجد أطباق</h1>
     </div>
    )
}

export default MenuItem;