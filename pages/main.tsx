import mainlogo from "../public/mainlogo.svg"
import Image from 'next/image'
import { NextPage } from 'next'

const Main:NextPage = () => {
  return (
    <main className="my-14 flex flex-col-reverse sm:flex-row">
      <div className="p-5 text-4xl text-white">
        Hi <br />
        Im Partha <br />
        Web Developer
      </div>
        <Image src={mainlogo} width={500} height={300}/>
    </main>
  )
}

export default Main