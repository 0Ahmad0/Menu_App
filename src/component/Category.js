import {Row,Col,Button} from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';
const categoryData=[
    'الكل',
    'فطار',
    'عشاء',
    'غذاء',
    'سناكات'
]
function Categories({filterByCategory,allCategories}){
    const OnFilter=(category)=>{
        filterByCategory(category);
    }
    return(
        <Row className='scrollbar'>
            <Col className='d-flex justify-content-center mb-2'>
                
            {
            allCategories.length?(
                allCategories.map((item,index)=>{
                    return(
       <Bounce left>

                        <div>
                <Button className='btn-color' onClick={()=> OnFilter(item)}>{item}</Button>
                            
                        </div>
                </Bounce>

                    )
                })
            ):<div></div>
        }
                </Col>
        </Row>
    )
}

export default Categories;


