// variables
let issuesContainer = document.querySelector('#issue-container');
let currentStatus = 'all';
let allIssues = [];
let filteredIssues = [];
let issueCount  = document.getElementById('issue-count');
const modalBox = document.getElementById('modal-box');
const searchInputEl = document.getElementById('search-input')


// load all issue function
const loadAllIssue = ()  => {
  spinner(true)
  const allIssueUrl = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
fetch(allIssueUrl)
.then(response => response.json())
.then(data => {
  allIssues = data.data;
  displayIssues(allIssues)
} )
}


// display all issue function
const displayIssues = (array) => {




if(currentStatus === 'all'){
  filteredIssues = array;
  issueCount.innerText = filteredIssues.length;
  
} else if(currentStatus === 'open'){
  filteredIssues = array.filter(item => item.status === 'open');
  issueCount.innerText = filteredIssues.length;
  
} else if(currentStatus !== 'open'){
  filteredIssues = array.filter(item => item.status === 'closed');
  issueCount.innerText = filteredIssues.length;
 
}






  issuesContainer.innerHTML = '';
 filteredIssues.forEach(element => {
  issuesContainer.innerHTML += `
  <div onclick="loadDetails(${element.id})"  class="border-t-4 ${element.status === 'open'? 'border-t-green-600':'border-t-[#A855F7]'} rounded-xl p-4 flex flex-col gap-2 shadow-xl">
      <div class="flex justify-between items-center cursor-pointer">
        <img ${element.status === 'open'? 'src="./assets/Open-Status.png"': 'src="./assets/Closed- Status .png"'} alt="">
        <p class="${element.priority === 'high'? 'bg-red-100 text-red-600':
           element.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
           element.priority === 'low' ? 'bg-gray-100 text-gray-600' : 'bg-red-100 text-red-600'
        } rounded-full px-8 py-1">${element.priority}</p>
      </div>

      <h1 class="text-2xl font-semibold ">${element.title}</h1>
      <p class="text-gray-600">${element.description}</p>

      <!-- badge -->
      <div class="flex gap-2">
       
        <div class="flex gap-2">
        ${element.labels.map(label => `<p class=" p-1.5 rounded-sm bg-red-100 text-red-400 font-medium">${label}</p>`).join('') }
          
        </div>
      </div>

      <hr class="border-gray-200 my-4">
      <p class="text-gray-600">${element.assignee ? element.assignee : 'Not assigned'}</p>
      <p class="text-gray-600">${element.createdAt}</p>
     </div>
  `
        spinner(false)
 });
} 


// filter function
const removeActive = () => {
  const fliterBtnNode = document.querySelectorAll('#filter .btn');
  fliterBtnNode.forEach(btn => btn.classList.remove('btn-primary'))
}
const filter = (id) => {
  removeActive()
 const filterBtn = document.getElementById(id);
 filterBtn.classList.add('btn-primary');

  if(id === 'filter-all'){
      currentStatus = 'all';
      displayIssues(allIssues)
      
  } else if(id === 'filter-open'){
    currentStatus = 'open';
    displayIssues(allIssues)
    
  } else if(id === 'filter-closed'){
    currentStatus = '';
   displayIssues(allIssues)
  }

  
}


// load issue details function
const loadDetails = (id) =>{
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    displayDetails(data.data);
    my_modal_5.showModal()
  } )
}

// display modal function
const displayDetails = (object) =>{
 
  modalBox.innerHTML =`
  <div class=" p-4 flex flex-col gap-2 ">
      <div class="flex justify-between items-center">
        <img ${object.status === 'open'? 'src="./assets/Open-Status.png"': 'src="./assets/Closed- Status .png"'} alt="">
        <p class="${object.priority === 'high'? 'bg-red-100 text-red-600':
           object.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
           object.priority === 'low' ? 'bg-gray-100 text-gray-600' : 'bg-red-100 text-red-600'
        } rounded-full px-8 py-1">${object.priority}</p>
      </div>

      <h1 class="text-2xl font-semibold cursor-pointer">${object.title}</h1>
      <p class="text-gray-600">${object.description}</p>

      <!-- badge -->
      <div class="flex gap-2">
       
        <div class="flex gap-2">
        ${object.labels.map(label => `<p class=" p-1.5 rounded-sm bg-red-100 text-red-400 font-medium">${label}</p>`).join('') }
          
        </div>
      </div>

      <hr class="border-gray-200 my-4">
      <p class="text-gray-600">Assignee: ${object.assignee ? object.assignee : 'Not assigned'}</p>
      <p class="text-gray-600">Create Date: ${object.createdAt}</p>
      <p class="text-gray-600">Update Date: ${object.updatedAt}</p>
     </div>
     <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  `
}



// search function
const loadSearch = () => {
  spinner(true)
  const searchInput = searchInputEl.value;
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchInput}`;
  fetch(url)
  .then(response => response.json())
  .then(data => displayIssues(data.data))
}

// spinner function
const spinner = (status) => {
  if(status === true){
    document.getElementById('spinner').classList.remove('hidden')
    document.getElementById('issue-container').classList.add('hidden')
  } else if(status === false){
     document.getElementById('spinner').classList.add('hidden')
    document.getElementById('issue-container').classList.remove('hidden')
  }

}
loadAllIssue()

