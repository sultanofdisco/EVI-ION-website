import '.ApplyPage.css'
import ApplyForm from './ApplyForm'
import RecruitingHeader from '../RecruitingHeader'


function ApplyPage() {

  // return 안에서 위쪽 logo랑 recruit 버튼은 Recruit 페이지에서 쓰는 컴포넌트와 동일해 보이는데, 
  // 전체 디자인을 맞춰 만들기 위해 일단 임시로 생성해둠. 나중에 편하게 수정하셔도 될 것 같아요. 
  return (
    <>
    <div className='app-container'>
      <RecruitingHeader />
      <div className='form-container'>
          <ApplyForm />
          </div>
    </div>
    </>
  )
}

export default ApplyPage
