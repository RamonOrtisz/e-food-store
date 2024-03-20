import FoodComponent from '../FoodComponent'
import { ContainerList, ContainerListFood } from './styles'

const ListFood = () => {
  return (
    <ContainerListFood className="container">
      <ContainerList>
        <FoodComponent />
      </ContainerList>
    </ContainerListFood>
  )
}

export default ListFood
