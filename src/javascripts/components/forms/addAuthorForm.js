const addAuthorForm = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-book-form" class="mb-4">
      <div class="form-group">
        <label for="title">First Name</label>
        <input type="text" class="form-control" id="authFirstName" aria-describedby="bookTitle" placeholder="Enter First Name" required>
      </div>
      <div class="form-group">
      <label for="title">Last Name</label>
      <input type="text" class="form-control" id="authLastName" aria-describedby="bookTitle" placeholder="Enter Last Name" required>
    </div>
      <div class="form-group">
        <label for="image">Email address</label>
        <input type="text" class="form-control" id="email" placeholder="Enter email" required>
      </div>
      <button type="submit" id="submit-author" class="btn btn-primary">Submit Author</button>
    </form>`;
};

export default addAuthorForm;
