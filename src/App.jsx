import './App.css';

const App = () => {
  return (
    <>
      {/* Header */}
      <div className="header">
        <h1>My Website</h1>
        <p>
          With <b>flexible</b>layout
        </p>
      </div>

      {/* Navigation Bar */}
      <nav className='navbar'>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </nav>


      {/* Main Content */}
      <div className='row'>

        {/* Side Part */}
        <div className='side'>
          <h2>About Me</h2>
          <h5>Photo of me:</h5>
          <div className='fakeImage'>Image</div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          <h3>More Text</h3>
          <p>Lorem ipsum dolor sit uae, sed?</p>
          <div className='small-image'>Image 1</div>
          <div className='small-image'>Image 2</div>
          <div className='small-image'>Image 3</div>
        </div>

        {/* Main Part */}
        <div className='main'>
          <h2>Title Heading</h2>
          <h5>Title description, Dec 7, 2017</h5>
          <div className='big-image'>Image</div>
          <p>Some Text</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsam delectus est consectetur unde nisi commodi consequatur accusamus ex alias! Numquam illo molestias iure maxime consequatur, corrupti ullam officia id ducimus ad minima minus magnam dolor fugiat fuga reprehenderit eum nobis aliquid asperiores soluta similique rerum obcaecati atque? Asperiores distinctio laboriosam doloremque aliquid provident soluta quasi praesentium. Saepe et in excepturi molestiae illum, molestias ea tempore reprehenderit quas magnam laborum eaque quasi est quo quibusdam aperiam perferendis possimus! Hic, doloribus temporibus. Optio, temporibus? Nam nemo provident asperiores atque reiciendis vel, dolor, dolore, labore esse illo ab molestiae porro earum tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero doloremque, quisquam veritatis dolores alias commodi cumque reiciendis ab ullam expedita, neque odit unde error voluptates ea praesentium accusamus soluta obcaecati est magni nam cupiditate corrupti pariatur nostrum? Praesentium debitis consequatur quo dolores illum numquam blanditiis unde autem cum corrupti explicabo ut non error dolore a odio, eos iusto iste dolorum hic, quidem, doloribus facere itaque? Ducimus beatae explicabo labore molestias iure alias! Veniam unde et quae ex qui mollitia aliquid facilis atque officia, temporibus aut rerum, aliquam aspernatur corrupti recusandae molestiae, nemo quos ducimus quam obcaecati iure perspiciatis tempore! Dolores.</p>
          <br />
          <h2>Title Heading</h2>
          <h5>Title description, Sep 2, 2017</h5>
          <div className='big-image'>Image</div>
          <p>Some Text</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae corporis omnis odio praesentium ut animi explicabo iusto facilis. Veritatis impedit atque inventore consectetur, optio aspernatur explicabo rem tempore enim molestiae, numquam eveniet doloremque aliquam deserunt, unde iusto officiis a delectus commodi vel repellendus praesentium odio consequatur! Culpa tempora obcaecati, ad nemo exercitationem cum recusandae quo repellat, soluta ullam sequi id, dolor suscipit veniam cupiditate quis? Perspiciatis sunt aut suscipit in soluta eligendi omnis doloremque accusantium minus eveniet, cumque eos quam assumenda nihil dolore quos adipisci, sapiente sed obcaecati illum recusandae a ex repellat amet? Libero vel illo sint corporis aut tempore accusamus. Praesentium aspernatur similique adipisci aperiam alias dignissimos et blanditiis voluptatibus dicta officia repudiandae exercitationem perferendis error debitis tempore suscipit nostrum labore veniam, assumenda cupiditate? Nulla officia atque non harum corporis minus eligendi ipsa sapiente officiis dicta modi, maiores repellendus voluptatibus eos provident reiciendis fugit culpa perferendis! Rerum praesentium doloremque, non nemo quasi deleniti, facere id perferendis accusantium nihil quod dolor, delectus ipsa laboriosam? Sunt atque vero ex, dolorum nam sapiente sed laborum eos! Dolores tenetur sed fuga, qui natus doloremque consequuntur obcaecati eveniet iste accusantium ullam doloribus laudantium voluptatem nisi dolorum. Similique odio accusamus eaque animi atque!</p>
        </div>
      </div>


      {/* Footer */}
      <div className='footer'>
        <h2>Footer</h2>
      </div>
    </>
  );
}

export default App