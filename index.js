const input = document.getElementById("user-input");
const showUser = document.getElementById("show-user");

input.addEventListener("keyup", e => {
  let userId = e.target.value;

  fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => {
      return response.json();
    })
    .then(user => {
      showUser.innerHTML = `
        <div class="ui link cards">
          <div class="card">
            <span class="ui extra icon header"
              ><i class="massive circular user circle icon"></i
            ></span>
            <div class="content">
              <div class="header">${user.name}</div>
              <div class="meta"><a>${user.username}</a></div>
              <div class="description">
                ${user.email}
              </div>
            </div>
            <div class="extra content">
              <span class="right floated">${
                user.website
              }<i class="chrome icon"></i></span>
              <span> <i class="phone icon"></i>${user.phone}</span>
            </div>
          </div>
        </div>
      `;
    })
    .catch(err => console.error(err));
});
