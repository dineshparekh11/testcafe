import { Selector } from "testcafe";
// fixture("authentication suite").page("https://qa-automation-practice.netlify.app/login.html");

// prettier-ignore
fixture `authentication suite`.page `https://dev.deepthought.education/login`
test("Test successful login with valid credentials.", async (t) => {
  const emailField = Selector("#username");
  const pswField = Selector("#password");
  const loginBtn = Selector("#login");
  

  await t
    .typeText(emailField, "dineshparekh11")
    .typeText(pswField, "@Jayhind99")
    .click(loginBtn)
});