let issuesContainer = document.querySelector('#issue-container');
let currentStatus = 'all';

const loadAllIssue = ()  => {
  const allIssueUrl = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
fetch(allIssueUrl)
.then(response => response.json())
.then(data => displayIssues(data.data))
}

// {
//     "id": 46,
//     "title": "Implement data backup system",
//     "description": "Set up automated daily backups of database with retention policy and restore procedures.",
//     "status": "open",
//     "labels": [
//         "enhancement"
//     ],
//     "priority": "high",
//     "author": "backup_bruce",
//     "assignee": "db_admin",
//     "createdAt": "2024-02-08T09:15:00Z",
//     "updatedAt": "2024-02-08T09:15:00Z"
// }



const displayIssues = (array) => {

let filteredIssues = [];
console.log(currentStatus)

if(currentStatus === 'all'){
  filteredIssues = array;
} else if(currentStatus === 'open'){
  filteredIssues = array.filter(item => item.status === 'open');
} else if(currentStatus !== 'open'){
  filteredIssues = array.filter(item => item.status !== 'open');
}






  issuesContainer.innerHTML = '';
 filteredIssues.forEach(element => {
  issuesContainer.innerHTML += `
  <div class="border-t-4 ${element.status === 'open'? 'border-t-green-600':'border-t-[#A855F7]'} rounded-xl p-4 flex flex-col gap-2 shadow-xl">
      <div class="flex justify-between items-center">
        <img ${element.status === 'open'? 'src="./assets/Open-Status.png"': 'src="./assets/Closed- Status .png"'} alt="">
        <p class="${element.priority === 'high'? 'bg-red-100 text-red-600':
           element.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
           element.priority === 'low' ? 'bg-gray-100 text-gray-600' : 'bg-red-100 text-red-600'
        } rounded-full px-8 py-1">${element.priority}</p>
      </div>

      <h1 class="text-2xl font-semibold">${element.title}</h1>
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

 });
} 

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
      
  } else if(id === 'filter-open'){
    currentStatus = 'open';
    
  } else if(id === 'filter-closed'){
    currentStatus = 'closed';
   
  }

  
}



loadAllIssue()

