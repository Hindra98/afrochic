
import Banner from "./components/banner"
import Card from "./components/card"

const Home = () => {

  return (
    <div>

      <Banner />
      
      <div className="flex flex-row justify-center flex-wrap gap-4 m-2">
      <Card id={'0'} name="Ecouteurs" price={41} size={186} note="4/5" />
      <Card id={'1'} name="Ecouteurs" price={41} size={186} note="4/5" />
      <Card id={'2'} name="Ecouteurs" price={41} size={186} note="4/5" />
      <Card id={'3'} name="Ecouteurs" price={41} size={186} note="4/5" />
      <Card id={'4'} name="Ecouteurs" price={41} size={186} note="4/5" />
      <Card id={'5'} name="Ecouteurs" price={41} size={186} note="4/5" />
      <Card id={'6'} name="Ecouteurs" price={41} size={186} note="4/5" />
      <Card id={'7'} name="Ecouteurs" price={41} size={186} note="4/5" />
      </div>
      
    </div>
  )
}

export default Home