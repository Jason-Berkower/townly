import Layout from "../components/Layout"


export default function Home(props) {
  return (
    <Layout>
    <div>
      <Layout user={props.user}>

      Home
      </Layout>
    </div>
    </Layout>
  )
}
