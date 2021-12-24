import Profile from './Profile/Profile';
import './App.css';

const App =()=> {
  const handleName = (name) => {
    alert(name)
  }
  return (
    <div className="App">
      <div class="card-holder">
  <div class="card">
  <Profile fullname="Dhia boumiza" handleName={handleName}><img src="/IMG-20210119-WA0060.jpg" style={{width:'55%',borderRadius:'20%' }}/> </Profile>

  </div>
</div>

    </div>
  );
}

export default App;