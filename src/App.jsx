import './App.css'
import Testimony from './components/Testimony/Testimony'
import Title from './components/Title/Title'
import image1 from './assets/images/image-1.jpg'
import image2 from './assets/images/image-2.jpg'
import image3 from './assets/images/image-3.jpg'
import image4 from './assets/images/image-4.jpg'


function App() {
  return (
    <div className="App">
      <Title />
      <div className='all-testimonies-container'>
        <Testimony 
        image={image1}
        alt= 'Mano con humo a su alrededor'
        name= 'Haz de luz'
        camera= 'Canon EOS 6D'
        text= 'Esta foto se tomó en Las Mesas, un pueblito de Cuenca. Durante el tiempo que estuvimos en la habitacion había gente fumando, por lo que había bastante humo en el ambiente. En un momento dado, un rayo de la luz del atardecer atravesó la ventana, y alguien intentó tocar el haz de luz.' />

        <Testimony 
        image={image2}
        alt= '4 personas delante de un tiovivo en movimiento'
        name= 'Tiovivo'
        camera= 'Canon EOS 6D'
        text= 'Esta fotografía fue tomada una noche en la feria de Sevilla. Durante mi periodo de prácticas de empresa del ciclo superior de imagen, tuvimos una grabación en el recinto ferial.' />

        <Testimony 
        image={image3}
        alt= 'Manos intentando alcanzar al cantante en un escenario'
        name= 'Fan'
        camera= 'Canon EOS 6D'
        text= 'Este momento fue captado durante la fiestas de polvos holi en la feria de Conil del a Frontera. El cantante, en un momento, se acercó al borde del escenario y los fans que se situaban en la primera fila alzaron sus manos para intentar tocarlo.' />

        <Testimony 
        image={image4}
        alt= 'Barbacoa de construcción con un fuego muy vivo'
        name= 'Barbacoa'
        camera= 'Canon EOS 6D'
        text= 'Durante una celebración en mi casa, quisimos hacer una barbacoa para invitar a los amigos. A la hora de encenderla, metimos demasiada leña y el fuego se creció bastante, llegando a sobrepasar la plancha.' />
      </div> 
    </div>
  )
}

export default App