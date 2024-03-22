import {
  ButtonCart,
  ContainerModal,
  FoodContainer,
  Modal,
  ProductContainer,
  Title,
  ContentModal,
  TitleClose
} from './styles'

import img1 from '../../assets/image/image 1.png'
import imgModal from '../../assets/image/imgModal.png'
import imgClose from '../../assets/image/close.png'

const FoodCarts = () => {
  return (
    <>
      <FoodContainer className="container">
        <li>
          <img src={img1} alt="" />
          <ProductContainer>
            <Title>
              <h3>Pizza Marguerite</h3>
            </Title>
            <p>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </p>
            <ButtonCart>Adicionar ao carrinho</ButtonCart>
          </ProductContainer>
        </li>

        <li>
          <img src={img1} alt="" />
          <ProductContainer>
            <Title>
              <h3>Pizza Marguerite</h3>
            </Title>
            <p>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </p>
            <ButtonCart>Adicionar ao carrinho</ButtonCart>
          </ProductContainer>
        </li>

        <li>
          <img src={img1} alt="" />
          <ProductContainer>
            <Title>
              <h3>Pizza Marguerite</h3>
            </Title>
            <p>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </p>
            <ButtonCart>Adicionar ao carrinho</ButtonCart>
          </ProductContainer>
        </li>

        <li>
          <img src={img1} alt="" />
          <ProductContainer>
            <Title>
              <h3>Pizza Marguerite</h3>
            </Title>
            <p>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </p>
            <ButtonCart>Adicionar ao carrinho</ButtonCart>
          </ProductContainer>
        </li>

        <li>
          <img src={img1} alt="" />
          <ProductContainer>
            <Title>
              <h3>Pizza Marguerite</h3>
            </Title>
            <p>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </p>
            <ButtonCart>Adicionar ao carrinho</ButtonCart>
          </ProductContainer>
        </li>

        <li>
          <img src={img1} alt="" />
          <ProductContainer>
            <Title>
              <h3>Pizza Marguerite</h3>
            </Title>
            <p>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </p>
            <ButtonCart>Adicionar ao carrinho</ButtonCart>
          </ProductContainer>
        </li>
      </FoodContainer>

      <Modal>
        <ContainerModal className="container">
          <div>
            <img src={imgModal} alt="" />
          </div>
          <ContentModal>
            <TitleClose>
              <h2>Pizza Marguerita</h2>
              <img src={imgClose} alt="" />
            </TitleClose>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
            </p>
            <span>Serve: de 2 a 3 pessoas</span>
            <ButtonCart>Adicionar ao carrinho - R$ 60,90</ButtonCart>
          </ContentModal>
        </ContainerModal>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default FoodCarts
