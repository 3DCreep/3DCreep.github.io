$("header").html(`<div class="head_logo">
<span>ALEXOS</span>
<img src="./content/Logo.gif" alt="" />
</div>
<nav class="main_nav">
<a href="./index.html" class="link">Main</a>
<a href="./about.html" class="link">About me</a>
<a href="./blogs.html" class="link">Blogs</a>

<a href="./contacts.html" class="link">Contacts</a>
<div id="select_hold">
<label for="select_from" >Choose theme:</label>
<select name="select" id="select_from" onchange="UpdateCok()">
  <optgroup>
  <option class="theme_opt" value="monokai">Monokai</option>
  <option class="theme_opt" value="dark_lime_flat">Dark Lime Flat</option>
  <option class="theme_opt" value="vs_dark">VS Dark </option>
  <option class="theme_opt" value="dracula">Dracula</option>
  <option class="theme_opt" value="ayu" >Ayu</option>
</optgroup>
</select>
</div>
<div class="head_logo nav_logo">
  <span>ALEXOS</span>
  <img src="./content/Logo.gif" alt="" />
</div>
</nav>
<div class="hamburger_menu" onclick="open_nav()">
<div class="bar"></div>
</div>`);
$("footer").html(`<footer class="footer">
<div class="foot_first">
<div class="head_logo">
  <span>ALEXOS</span>
  <img src="./content/Logo.gif" alt="" />
</div>
<nav class="foot_nav">
  <a href="./index.html" class="link">Main</a>
  <a href="./about.html" class="link">About me</a>
  <a href="./blogs.html" class="link">Blogs</a>

  <a href="./contacts.html" class="link">Contacts</a>
</nav>
</div>
<div class="foot_lc">
<p>Last update: 10.12.23</p> <p>&copy;2023. All rights reserved.</p>
</div>
</footer>`);

if (screen.width < 400) {
  $("header").after(` <div class="screen_warn">
  <h2>
    Warning! This website is not recommended to be visited on small screens.
    Be prepared for unreadability and bugs.
  </h2>
</div>`);
}
