const initState = {
    projects :[
    {id:'1',name :"Amira",title :"Sun To Profit"},
    {id:'2',name :"Nermeen",title :"Sun To Profit"},
    {id:'3',name :"Doaa",title :"Sun To Profit"}
]
    
}
const ProjectReducer = (state= initState , action) => {
    switch (action.type) {
        case 'CREATE_PROJECT_SUCCESS':
          console.log('create project success');
          return state;
        case 'CREATE_PROJECT_ERROR':
          console.log('create project error');
          return state;
        default:
          return state;
      }
};

export default ProjectReducer;