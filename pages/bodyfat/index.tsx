import { NextPage } from "next"
import HistoricalBodyfatList from "../../component/historical-bodyfat-list"
import { PageTitle } from "../../component/page-title"

const BodyfatIndex: NextPage = () => {
  return (
    <>
      <PageTitle
        h1="Record historical bodyfat data"
        caption="Login to store your previous calculations"
      />
      <p>Record your historical bodyfat data</p>
      <HistoricalBodyfatList />

    </>
  )
}

export default BodyfatIndex
