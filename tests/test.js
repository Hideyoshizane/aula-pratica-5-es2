function clickButton(buttonName) {
  document.querySelector(`input[name="${buttonName}"]`).click();
}

function getDisplayValue() {
  return document.forms["form"].elements["displayResult"].value;
}

function validateResult(expectedResult) {
  const actualResult = getDisplayValue();
  console.log(`::group::Test Result`);
  console.log(`Expected Result: ${expectedResult}`);
  console.log(`Actual Result: ${actualResult}`);
  if (actualResult === expectedResult) {
    console.log(`::set-output name=result::Passed`);
    console.log(`Test Result: Passed`);
  } else {
    console.log(`::set-output name=result::Failed`);
    console.log(`Test Result: Failed`);
  }
  console.log(`::endgroup::`);
}

// Test Case 1: Addition
clickButton("b7");
clickButton("addb");
clickButton("b3");
clickButton("equal");
validateResult("10");

// Test Case 2: Subtraction
clickButton("b9");
clickButton("subb");
clickButton("b4");
clickButton("equal");
validateResult("5");

// Test Case 3: Multiplication
clickButton("b2");
clickButton("mulb");
clickButton("b6");
clickButton("equal");
validateResult("12");

// Test Case 4: Division
clickButton("b8");
clickButton("divb");
clickButton("b2");
clickButton("equal");
validateResult("4");

// Test Case 5: Decimal Point
clickButton("b1");
clickButton("potb");
clickButton("b5");
clickButton("addb");
validateResult("1.5");

// Test Case 6: Multiple Calculations
clickButton("b3");
clickButton("addb");
clickButton("b2");
clickButton("equal");
clickButton("mulb");
clickButton("b4");
clickButton("equal");
validateResult("20");
