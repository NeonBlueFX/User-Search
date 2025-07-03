import { useCallback, useEffect, useMemo, useState } from 'react'
import { UserInterface } from './components/userSelecter'
import SelectedUserModal from './components/selectedUserModal'
import UserPostsModal from './components/UserPostModal'
import SearchBar from './components/Searchbar'
import { Posts, SelecteduserDataInterface, userDataInterface } from './Interfaces/interfaces'
import './App.css'
import { UserPostsInterface } from './components/UserPostComponent'



function App() {
  const [userData, setUserData] = useState([
    {} as userDataInterface
  ])
  const [filterUserName, setFilterUserName] = useState<string>("")
  const [filterUserNameData, setFilterUserData] = useState([
    {} as userDataInterface
  ])

  const [userPosts, setUserPosts] = useState([
    {} as Posts
  ])
  const [openUserModal, setOpenUserModal] = useState(false)
  const [openPostsModal, setOpenPostsModal] = useState(false)
  const [SelecteduserData, setSelectedUserData] = useState(
    {} as SelecteduserDataInterface
  )
  useMemo(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json()).then((data) => { console.log(data), setUserData(data) }).catch(console.error)

  }, [])

  useEffect(() => {
    const filteredData = userData.filter((data) => data?.username?.toLocaleLowerCase().includes(filterUserName.toLocaleLowerCase()))
    console.log(filterUserNameData)
    setFilterUserData(filteredData)
  }, [filterUserName])

  const getPosts = useCallback((id: number) => {
    try {
      fetch("https://graphqlzero.almansi.me/api", {
        "method": "POST",
        "headers": { "content-type": "application/json" },
        "body": JSON.stringify({
          query: `query {
        user(id: ${id}) {
        posts {
        data {
         id
          title
              }
            }
          }
        }`
        })
      }).then(res => res.json()).then((data) => { setUserPosts(data.data.user.posts.data) })

    } catch (error) {

    }

  }
    , [userPosts])

  const handleSearch = (data) => {
    setFilterUserName(data)
  }

  const SelectUser = (id: number) => {
    const selectedUser = userData.find((user) => user.id == id) as SelecteduserDataInterface
    getPosts(selectedUser.id)
    setSelectedUserData(selectedUser)
    setOpenUserModal(true)

  }

  return (
    <main className='min-w-fit min-h-[100vh] bg-lime-100'>
      <div className='shadow-2xl p-10 bg-gray-300'>
        <img src='/media/Logo.png' className='w-[200px] h-[100px] m-auto'></img>
      </div>
      <div className='flex flex-col justify-center p-5 m-auto mt-[100px]'>
        <span className='text-center font-bold text-xl'>Busqueda de Usuarios</span>
        <div className='flex flex-col justify-center p-5 m-auto mt-[10px]'>
          <SearchBar filteredusers={handleSearch} />
        </div>

      </div>
      <div className=' shadow-2xl bg-[rgba(255,255,255,0.2)] rounded-4xl w-1/2 m-auto mt-20 h-[800px] p-5'>


        <div className='flex flex-col p-5 m-auto gap-10'>
          {!filterUserName && userData.map(user => {
            return (
              <div>
                <UserInterface key={user.id} props={user} selectuser={() => SelectUser(user.id)} />
              </div>
            )
          })}
          {filterUserName && filterUserNameData.map(user => {
            return (
              <div>
                <UserInterface key={user.id} props={user} selectuser={() => SelectUser(user.id)} />
              </div>
            )
          })}
        </div>

        {openUserModal && <SelectedUserModal>
          <button className='ms-[700px]' onClick={() => setOpenUserModal(false)}>
            <img src='/media/x-icon.svg' className='w-[10px] scale-125 h-[20px]'></img>
          </button>
          <h2 className=' text-2xl font-bold'>
            {SelecteduserData.username}
          </h2>
          <div className='grid grid-rows-3 p-5 shadow-xl rounded-2xl'>
            <div className='grid grid-cols-3 gap-3'>
              <div className=''>
                <span className=' font-bold'>Name:</span> {SelecteduserData.name}
              </div>
              <div className=''>
                <span className=' font-bold'>Email:</span> {SelecteduserData.email}
              </div>
              <div className=''>
                <span className=' font-bold'>Phone:</span> {SelecteduserData.phone}
              </div>


            </div>
            <hr className='min-w-[100%] m-auto ' />
            <div className='grid grid-cols-2'>
              <span className='text-xl w-full pt-2'>
                Address Info
              </span>

            </div>
            <div className='grid grid-cols-2 gap-3 py-2'>
              <div className=''>
                <span className=' font-bold'>City:</span> {SelecteduserData.address.city}
              </div>
              <div className=''>
                <span className=' font-bold'>Street:</span> {SelecteduserData.address.street}
              </div>
              <div className=''>
                <span className=' font-bold'>Suite:</span> {SelecteduserData.address.suite}
              </div>
              <div className=''>
                <span className=' font-bold'>Zipcode:</span> {SelecteduserData.address.zipcode}
              </div>
              <div className=''>
                <span className=' font-bold'>Geo-Location:</span> {SelecteduserData.address.geo.lat + "," + SelecteduserData.address.geo.lng}
              </div>

            </div>
            <hr className='min-w-[700px] max-w-[700px] m-auto' />
            <div className='grid grid-cols-2'>
              <span className='text-xl w-full pt-2'>
                Company Info
              </span>
            </div>
            <div className='grid grid-cols-2 gap-3 py-2'>
              <div className=''>
                <span className=' font-bold'>Company Name:</span> {SelecteduserData.company.name}
              </div>
              <div className=''>
                <span className=' font-bold'>Company CatchPhrase:</span> {SelecteduserData.company.catchPhrase}
              </div>
              <div className=''>
                <span className=' font-bold'>Company bs:</span> {SelecteduserData.company.bs}
              </div>
              <div className=''>
                <span className=' font-bold'>Website:</span> {SelecteduserData.website}
              </div>


            </div>
            <div className='w-full m-auto pt-5'>
              <button onClick={() => { console.log(userPosts), setOpenPostsModal(true) }} className=' w-[100px] ms-0 h-[50px] font-bold bg-lime-200 hover:bg-lime-500 rounded-md'>
                See Posts
              </button>
            </div>
          </div>


        </SelectedUserModal>}
        {openPostsModal && <UserPostsModal>
          <button className='text-right' onClick={() => setOpenPostsModal(false)}>
            close
          </button>
          <h2 className='m-auto text-center text-2xl font-bold py-4'>
            Posts
          </h2>
          {userPosts.map((posts) => {
            return (
              <div className='py-5'>

                <UserPostsInterface key={posts.id} props={posts} author={SelecteduserData.username} />
              </div>
            )
          })
          }
        </UserPostsModal>}
      </div>
    </main>
  )
}

export default App
