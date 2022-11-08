import Link from 'next/link'


export default function Home() {
  return (
  
  <div> 
    <h1>
      Login 
    </h1>
    <Link href="./cadastro"> 
            <h1>link Cadastro</h1>
    </Link> 
    <Link href="./principal"> 
            <h1>link Principal</h1>
    </Link> 


  </div>
    

  )
}