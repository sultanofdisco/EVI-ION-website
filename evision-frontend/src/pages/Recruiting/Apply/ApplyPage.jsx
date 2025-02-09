import '.ApplyPage.css'
import ApplyForm from '../components/ApplyForm'


function ApplyPage() {

  // return 안에서 위쪽 logo랑 recruit 버튼은 
  // Recruit 페이지에서 쓰는 컴포넌트 재활용하면 될듯해서 따로 코딩 안함. 
  return (
    <>
    <div className='app-container'>

      <div className='form-container'>
          <ApplyForm />
          </div>
    </div>
    </>
  )
}

export default ApplyPage
