let btnNextStep=document.querySelector(".btn-next-step");
let currentStep=document.querySelectorAll(".current-step");
let currentStepIndex=0;
let formWrapper=document.querySelector(".form-wrapper");
currentStep[currentStepIndex].classList.add("current-step-selected");
const heading = document.getElementById("heading");
const description = document.getElementById("description");
const content = document.getElementById("form-step-content");
let formData = {
  name: "",
  email: "",
  phoneNumber: ""
};
heading.innerText="Personal info";
description.innerText="Please provide your name,email address, and phone number.";
content.innerHTML=`
    <form class="personal-form">
      <label for="name">Name</label>
      <input type="text" id="name" required placeholder="ex.Peter White">
      <label for="email">Email</label>
      <input type="email" id="email" required placeholder="ex.qwerty@gmail.com">
      <label for="phone-number">Phone number</label>
      <input type="number" id="phone-number" required placeholder="ex.1900-321-321">
    </form>
  <button class="btn-next-step" type="submit">Next Step</button>
    `;

function everythingFilledIn(){
  if(currentStepIndex===0){
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let phoneNumber=document.getElementById("phone-number");
    if(!name.value.trim()||!email.value.trim()||!phoneNumber.value.trim()){
      alert("Please fill in the form");
      return false;
    }
    return true;
  }
 else if (currentStepIndex === 1) {
  let planBtns = document.querySelectorAll(".plan-holder");
  
  let selectedExists = Array.from(planBtns).some(
    btn => btn.classList.contains("plan-holder-selected")
  );

   if (!selectedExists) {
      alert("Please select a plan");
      return false;
    }
    return true;
  }
  else if(currentStepIndex===2){
    return true;
  }
  
  
}
let plan="";
let planPrice="";
let mnYearly="";
function selectPlan(){
  let planBtns=document.querySelectorAll(".plan-holder");
  planBtns.forEach((planBtn)=>{
    planBtn.addEventListener("click",()=>{
     planBtns.forEach((planBtn)=>{
      planBtn.classList.remove("plan-holder-selected");
     })
     planBtn.classList.add("plan-holder-selected");
     
     plan=planBtn.dataset.plan;
     planPrice=planBtn.dataset.price;
    })
  })
}
function extractNumber(priceStr) {
  return parseInt(priceStr.replace(/[^\d]/g, ""));
}
btnNextStep.addEventListener("click",()=>{

  if(everythingFilledIn()){

  }
  else{
    return;
  }
  
currentStep[currentStepIndex].classList.remove("current-step-selected")
 
    currentStepIndex++;
      if(currentStepIndex===3){
        btnNextStep.classList.add("invisible");
      }
      else{
        btnNextStep.classList.remove("invisible");
       
      }
  currentStep[currentStepIndex].classList.add("current-step-selected");
  
 switch (currentStepIndex) {
  case 0:
heading.innerText="Personal info";
description.innerText="Please provide your name,email address, and phone number.";
content.innerHTML=`
    <form class="personal-form">
      <label for="name">Name</label>
      <input type="text" id="name" required placeholder="ex.Peter White">
      <label for="email">Email</label>
      <input type="email" id="email" required placeholder="ex.qwerty@gmail.com">
      <label for="phone-number">Phone number</label>
      <input type="number" id="phone-number" required placeholder="ex.1900-321-321">
    </form>
  <button class="btn-next-step" type="submit">Next Step</button>
    `;
    document.getElementById("name").value = formData.name;
document.getElementById("email").value = formData.email;
document.getElementById("phone-number").value = formData.phoneNumber;
document.getElementById("name").addEventListener("input", e => formData.name = e.target.value);
document.getElementById("email").addEventListener("input", e => formData.email = e.target.value);
document.getElementById("phone-number").addEventListener("input", e => formData.phoneNumber = e.target.value);
    goBack();

  break;
    case 1:
        heading.innerText="Select your plan";
        description.innerText="You have the option of monthly or yearly billing.";
      content.innerHTML=`
      
        <div class="general-plan-holder">
            <button class="plan-holder" data-plan="Arcade" data-price="$9/mo">
            <img src="/assets/images/icon-arcade.svg">
                <div class="wrapper">
                    <h3>Arcade</h3>
                    <span id="arcade-price">$9/mo</span>
                </div>
            </button>
            <button class="plan-holder" data-plan="Advanced" data-price="$12/mo">
            <img src="/assets/images/icon-advanced.svg">
                <div class="wrapper">
                    <h3>Advanced</h3>
                    <span id="advanced-price">$12/mo</span>
                </div>

            </button>
            <button class="plan-holder" data-plan="Pro" data-price="$15/mo">
            <img src="/assets/images/icon-pro.svg">
                <div class="wrapper">
                    <h3>Pro</h3>
                    <span id="pro-price">$15/mo</span>
                </div>
            </button>
        </div>
        <div class="container-mn-year">
  <p class="mn-yearly-p mn-yearly-chosen" id="monthly">Monthly</p>
  <label class="switch-btn-mn-year">
    <input type="checkbox" id="billing-toggle">
    <span class="slider"></span>
  </label>       
  <p class="mn-yearly-p" id="yearly">Yearly</p>
</div>

        <button class="btn-go-back">Go back</button>
        `;
        goBack();
        switchingMnYear();
        selectPlan();
      break;
    case 2:
      heading.innerText = "Pick add-ons";
      description.innerText = "Add-ons help enhance your gaming experience.";
      content.innerHTML=`
      <div class="general-add-ons-holder">
        <div class="add-ons-holder">
          <label>
            <input type="checkbox" class="checkbox-begining" data-add-ons="Online service" data-add-ons-price-monthly="+1$/mo" data-add-ons-price-yearly="+10$/yr">
          </label>
                <div class="wrapper">
                  <h3>Online service</h3>
                   <span>Access to miltiplayer games</span>
                </div>
                <p class="add-ons-price" id="access-games">+1$/mo</p>

        </div>
        <div class="add-ons-holder">
        <label>
            <input type="checkbox" class="checkbox-begining" data-add-ons="Larger storage" data-add-ons-price-monthly="+2$/mo" data-add-ons-price-yearly="+20$/yr">
          </label>
                <div class="wrapper">
                  <h3>Larger storage</h3>
                  <span>Extra 1TB of cloud save</span>
                </div>
                <p class="add-ons-price" id="extra-tb">+2$/mo</p>

        </div>
        <div class="add-ons-holder">
        <label>
            <input type="checkbox" class="checkbox-begining" data-add-ons="Customisable profile" data-add-ons-price-monthly="+2$/mo" data-add-ons-price-yearly="+20$/yr">
          </label>
                <div class="wrapper wrstep3">
                  <h3>Customisable profile</h3>
                  <span>Custom theme on your phone</span>
                </div>
                <p class="add-ons-price" id="custom-theme">+2$/mo</p>
        </div>
      </div>
        <button class="btn-go-back">Go back</button>
      
      `
      document.querySelectorAll(".checkbox-begining").forEach(box => {
  const addOn = box.dataset.addOns;
  const price = globalBillingYearly 
    ? box.dataset.addOnsPriceYearly 
    : box.dataset.addOnsPriceMonthly;

  if (addOns.includes(addOn)) {
    box.checked = true;
    box.closest(".add-ons-holder").classList.add("add-ons-holder-selected");
  }
});
      switchingAddOnsPrice();
      selectAddOns();
      goBack();
      break;
    case 3:
      heading.innerText = "Finishing up";
      description.innerText = "Double-check everything looks OK before confirming.";
      let summaryHTML = addOns.map((addOn, index) => {
  return `
  <div class="summary-add-ons">
  <p class="summary-add-ons-name">${addOn}</p>
  <p class="summary-add-ons-price">${addOnsPrice[index]}</p>
  </div>
  `;
}).join("");
const planCost = extractNumber(planPrice);
const addOnsTotal = addOnsPrice.reduce((sum, price) => {
  return sum + extractNumber(price);
}, 0);
const total = planCost + addOnsTotal;
      content.innerHTML=`
      <div class="general-summary-holder">
      <div class="summary-plan">
        <h3>${plan} (${globalBillingYearly ? "Yearly" : "Monthly"})</h3>
        <p class="">${planPrice}</p>
      </div> 
      <div class="general-summary-add-ons">
       ${summaryHTML || "<p>No add-ons selected</p>"}
       </div>
       <div class="total-holder">
        <p class="total">Total (${globalBillingYearly ? "per year" : "per month"})</p>
        <p class="total-sum">$${total}/${globalBillingYearly ? "yr" : "mo"}</p>
        </div>
        </div>
        <button class="btn-confirm">Confirm</button>
        <button class="btn-go-back">Go back</button>
      `
      let btnConfirm = document.querySelector(".btn-confirm");
        btnConfirm.addEventListener("click",()=>{
          heading.innerText="";
          description.innerText="";
          content.innerHTML=`
          <div class="thanks-holder">
          <img class="thanks-img" src="/assets/images/icon-thank-you.svg">
          <h2 class="thanks-head">Thank you!</h2>
          <p class="thanks-text">Thanks for confirming your subscription!We hope you have fun using our platform.If you ever need support,please feel free to email us at support@qwerty.com</p>
          </div>
          `
        })
      goBack();
      break;
   
  }
});


function goBack() {
  let btnGoBack = document.querySelector(".btn-go-back");
  
      btnGoBack.addEventListener("click", () => {
        currentStep[currentStepIndex].classList.remove("current-step-selected");

    
      currentStepIndex--;
    if (currentStepIndex === 3) {
  btnNextStep.classList.add("invisible");
} else {
  btnNextStep.classList.remove("invisible");
}

    
    currentStep[currentStepIndex].classList.add("current-step-selected");
    switch (currentStepIndex) {
    case 0:
heading.innerText="Personal info";
description.innerText="Please provide your name,email address, and phone number.";
content.innerHTML=`
    <form class="personal-form">
      <label for="name">Name</label>
      <input type="text" id="name" required placeholder="ex.Peter White">
      <label for="email">Email</label>
      <input type="email" id="email" required placeholder="ex.qwerty@gmail.com">
      <label for="phone-number">Phone number</label>
      <input type="number" id="phone-number" required placeholder="ex.1900-321-321">
    </form>
  <button class="btn-next-step" type="submit">Next Step</button>
    `;
    document.getElementById("name").value = formData.name;
document.getElementById("email").value = formData.email;
document.getElementById("phone-number").value = formData.phoneNumber;
document.getElementById("name").addEventListener("input", e => formData.name = e.target.value);
document.getElementById("email").addEventListener("input", e => formData.email = e.target.value);
document.getElementById("phone-number").addEventListener("input", e => formData.phoneNumber = e.target.value);
    goBack();

    break;
    case 1:
        heading.innerText="Select your plan";
        description.innerText="You have the option of monthly or yearly billing.";
      content.innerHTML=`
      
        <div class="general-plan-holder">
            <button class="plan-holder" data-plan="Arcade" data-price="$9/mo">
            <img src="/assets/images/icon-arcade.svg">
                <div class="wrapper">
                    <h3>Arcade</h3>
                    <span id="arcade-price">$9/mo</span>
                </div>
            </button>
            <button class="plan-holder" data-plan="Advanced" data-price="$12/mo">
            <img src="/assets/images/icon-advanced.svg">
                <div class="wrapper">
                    <h3>Advanced</h3>
                    <span id="advanced-price">$12/mo</span>
                </div>

            </button>
            <button class="plan-holder" data-plan="Pro" data-price="$15/mo">
            <img src="/assets/images/icon-pro.svg">
                <div class="wrapper">
                    <h3>Pro</h3>
                    <span id="pro-price">$15/mo</span>
                </div>
            </button>
        </div>
        <div class="container-mn-year">
  <p class="mn-yearly-p mn-yearly-chosen" id="monthly">Monthly</p>
  <label class="switch-btn-mn-year">
    <input type="checkbox" id="billing-toggle">
    <span class="slider"></span>
  </label>       
  <p class="mn-yearly-p" id="yearly">Yearly</p>
</div>

        <button class="btn-go-back">Go back</button>
        `;
        goBack();
        switchingMnYear();
        selectPlan();
      break;
    case 2:
      heading.innerText = "Pick add-ons";
      description.innerText = "Add-ons help enhance your gaming experience.";
      content.innerHTML=`
      <div class="general-add-ons-holder">
        <div class="add-ons-holder">
          <label>
            <input type="checkbox" class="checkbox-begining" data-add-ons="Online service" data-add-ons-price-monthly="+1$/mo" data-add-ons-price-yearly="+10$/yr">
          </label>
                <div class="wrapper">
                  <h3>Online service</h3>
                   <span>Access to miltiplayer games</span>
                </div>
                <p class="add-ons-price" id="access-games">+1$/mo</p>

        </div>
        <div class="add-ons-holder">
        <label>
            <input type="checkbox" class="checkbox-begining" data-add-ons="Larger storage" data-add-ons-price-monthly="+2$/mo" data-add-ons-price-yearly="+20$/yr">
          </label>
                <div class="wrapper">
                  <h3>Larger storage</h3>
                  <span>Extra 1TB of cloud save</span>
                </div>
                <p class="add-ons-price" id="extra-tb">+2$/mo</p>

        </div>
        <div class="add-ons-holder">
        <label>
            <input type="checkbox" class="checkbox-begining" data-add-ons="Customisable profile" data-add-ons-price-monthly="+2$/mo" data-add-ons-price-yearly="+20$/yr">
          </label>
                <div class="wrapper wrstep3">
                  <h3>Customisable profile</h3>
                  <span>Custom theme on your phone</span>
                </div>
                <p class="add-ons-price" id="custom-theme">+2$/mo</p>
        </div>
      </div>
        <button class="btn-go-back">Go back</button>
      
      `
      document.querySelectorAll(".checkbox-begining").forEach(box => {
  const addOn = box.dataset.addOns;
  const price = globalBillingYearly 
    ? box.dataset.addOnsPriceYearly 
    : box.dataset.addOnsPriceMonthly;

  if (addOns.includes(addOn)) {
    box.checked = true;
    box.closest(".add-ons-holder").classList.add("add-ons-holder-selected");
  }
});
      switchingAddOnsPrice();
      selectAddOns();
      goBack();
      break;
    case 3:
      heading.innerText = "Finishing up";
      description.innerText = "Double-check everything looks OK before confirming.";
      let summaryHTML = addOns.map((addOn, index) => {
  return `
  <div class="summary-add-ons">
  <p class="summary-add-ons-name">${addOn}</p>
  <p class="summary-add-ons-price">${addOnsPrice[index]}</p>
  </div>
  `;
}).join("");
const planCost = extractNumber(planPrice);
const addOnsTotal = addOnsPrice.reduce((sum, price) => {
  return sum + extractNumber(price);
}, 0);
const total = planCost + addOnsTotal;
      content.innerHTML=`
      <div class="general-summary-holder">
      <div class="summary-plan">
        <h3>${plan} (${globalBillingYearly ? "Yearly" : "Monthly"})</h3>
        <p class="plan-price">${planPrice}</p>
      </div> 
      <div class="general-summary-add-ons">
       ${summaryHTML || "<p>No add-ons selected</p>"}
       </div>
       <div class="total-holder">
        <p class="total">Total (${globalBillingYearly ? "per year" : "per month"})</p>
        <p class="total-sum">$${total}/${globalBillingYearly ? "yr" : "mo"}</p>
        </div>
        </div>
        <button class="btn-go-back">Go back</button>
      `
      goBack();
      break;
   
  }
    });
  
}
let globalBillingYearly = false;
function switchingMnYear(){
  const mnYearlyP = document.querySelectorAll(".mn-yearly-p");
  const switchBtnMnYear = document.querySelector("#billing-toggle");
  const planHolder = document.querySelectorAll(".plan-holder");

  function updateBillingUI(isYearly) {
  globalBillingYearly = isYearly;
  if (isYearly) {
    mnYearlyP.forEach(p => {
      p.textContent.trim().toLowerCase() === "yearly"
        ? p.classList.add("mn-yearly-chosen")
        : p.classList.remove("mn-yearly-chosen");
    });

    document.getElementById("arcade-price").textContent = "$90/yr";
    document.getElementById("advanced-price").textContent = "$120/yr";
    document.getElementById("pro-price").textContent = "$150/yr";

    planHolder.forEach(div => {
      if (!div.querySelector(".two-month-free-p")) {
        div.insertAdjacentHTML("beforeend", "<p class='two-month-free-p'>2 months free</p>");
      }

      const plan = div.dataset.plan;
      if (plan === "Arcade") div.dataset.price = "$90/yr";
      if (plan === "Advanced") div.dataset.price = "$120/yr";
      if (plan === "Pro") div.dataset.price = "$150/yr";
    });

    switchBtnMnYear.nextElementSibling.classList.add("slider-right");

  } else {
    mnYearlyP.forEach(p => {
      p.textContent.trim().toLowerCase() === "monthly"
        ? p.classList.add("mn-yearly-chosen")
        : p.classList.remove("mn-yearly-chosen");
    });

    document.getElementById("arcade-price").textContent = "$9/mo";
    document.getElementById("advanced-price").textContent = "$12/mo";
    document.getElementById("pro-price").textContent = "$15/mo";

    document.querySelectorAll(".two-month-free-p").forEach(el => el.remove());

    planHolder.forEach(div => {
      const plan = div.dataset.plan;
      if (plan === "Arcade") div.dataset.price = "$9/mo";
      if (plan === "Advanced") div.dataset.price = "$12/mo";
      if (plan === "Pro") div.dataset.price = "$15/mo";
    });

    switchBtnMnYear.nextElementSibling.classList.remove("slider-right");
  }
  const selectedPlan = document.querySelector(".plan-holder-selected");
  if (selectedPlan) {
    plan = selectedPlan.dataset.plan;
    planPrice = selectedPlan.dataset.price;
  }
}
  updateBillingUI(switchBtnMnYear.checked);
  switchBtnMnYear.addEventListener("change", () => {
    updateBillingUI(switchBtnMnYear.checked);
  });
}
function switchingAddOnsPrice() {
  const billingToggle = document.getElementById("billing-toggle");
  const customTheme = document.getElementById("custom-theme");
  const extraTb = document.getElementById("extra-tb");
  const accessGames = document.getElementById("access-games");
 
  function updatePrices(isYearly) {
    if (isYearly) {
      customTheme.textContent = "+20$/yr";
      extraTb.textContent = "+20$/yr";
      accessGames.textContent = "+10$/yr";
    } else {
      customTheme.textContent = "+2$/mo";
      extraTb.textContent = "+2$/mo";
      accessGames.textContent = "+1$/mo";
    }
    
  }

  

  updatePrices(globalBillingYearly); 

}
let addOns=[];
let addOnsPrice=[];
function selectAddOns(){
  let checkBox=document.querySelectorAll(".checkbox-begining");
  let addOnsHolder=document.querySelectorAll(".add-ons-holder");
  checkBox.forEach((box)=>{
    box.addEventListener("change",()=>{
     const holder=box.closest(".add-ons-holder");
        const addOn = box.dataset.addOns;
        const price = globalBillingYearly 
        ? box.dataset.addOnsPriceYearly 
        : box.dataset.addOnsPriceMonthly;
     holder.classList.toggle("add-ons-holder-selected");
        if (box.checked) {
  if (!addOns.includes(addOn)) {
    addOns.push(addOn);
    addOnsPrice.push(price);
  }
} else {
  const index = addOns.indexOf(addOn);
  if (index !== -1) {
    addOns.splice(index, 1);
    addOnsPrice.splice(index, 1);
  }
}
    })
  })
}


