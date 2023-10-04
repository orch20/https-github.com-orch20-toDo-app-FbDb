<template>
  <div class="container" style="height: calc(100vh - 200px); overflow-y: auto;">   
      <section>
          <h2>Introduction:</h2>
          <p>Welcome to ToDoList App, a project I am truly passionate about! This app has been designed to help users manage their tasks and stay organized effortlessly. Leveraging cutting-edge technologies like Vue 3, Pinia, Bootstrap, and responsive layout design, this app promises a seamless and user-friendly task management experience.</p>
      </section>
      <section>
          <h2>Key Technologies Used:</h2>
          <ul>
              <li><strong>Vue 3:</strong> ToDoList App is built using the Vue 3 framework, a modern and progressive JavaScript framework for building user interfaces.</li>
              <li><strong>Pinia:</strong> To manage state efficiently within the app, I have incorporated Pinia, a state management solution specifically designed for Vue 3 applications.</li>
              <li><strong>Bootstrap:</strong> To ensure a visually appealing and user-friendly interface.</li>
              <li><strong>Responsive Layout:</strong> The app's responsive layout design ensures that it adapts seamlessly to various screen sizes, including desktops, tablets, and mobile devices.</li>
          </ul>
      </section>
      <section>
          <h2>Key Features of My ToDoList App:</h2>
          <ol>
              <li><strong>Task Management:</strong> Users can easily add, edit, and delete tasks.</li>
              <li><strong>Status Tracking:</strong> The app allows users to mark tasks as complete or in-progress.</li>
              <li><strong>Filtering and Sorting:</strong> Users can filter and sort tasks based on various criteria.</li>
              <li><strong>User Authentication:</strong> For enhanced security and personalization, the app includes user authentication features.</li>
              <li><strong>Cross-Device Compatibility:</strong> Thanks to the responsive layout, My ToDoList App is accessible on a wide range of devices.</li>
          </ol>
      </section>
      <section >
          <h2>Future Enhancements:</h2>
          <p>In the future, I plan to further enhance the app by adding features such as task sharing, notifications, and integrations with popular productivity tools. I am committed to continually improving My ToDoList App to provide the best possible task management experience.</p>
      </section>
      <section >
          <h2>Conclusion:</h2>
          <p>ToDoList App is a labor of love that combines the power of Vue 3 to offer users a seamless and efficient task management solution. Stay organized, stay productive, and enjoy the convenience of managing tasks with ease through this innovative application.</p>
      </section>
  
  </div>
</template>

<style scoped>
  section {
      max-width: 800px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      background-color: #fff;
  }

  

  ul, ol {
      list-style: none;
      padding-left: 0;
  }

  li {
      margin-bottom: 10px;
  }

  strong {
      font-weight: bold;
  }
</style>