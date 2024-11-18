export const environment = {
  production: false,
  apiUrl: 'https://localhost:7161/api/',
};

export const url = {
  // auth
  login: 'Accounts/SignIn',
  register: 'Accounts/SignUp',
  forgotPassword: 'Accounts/forgot-password',
  resetPassword: 'Accounts/reset-password',
  refreshToken: 'Accounts/refresh',
  Rekove: 'Accounts/rekove',

  //company
  GetCompany: 'Companies/GetCompany',
  UpdateCompany: 'Companies/UpdateCompany',

  //product
  GetAllProduct: 'Products/GetAllProduct',
  GetProduct: 'Products/GetProduct',
  AddProduct: 'Products/AddProduct',
  UpdateProduct: 'Products/UpdateProduct',
  DeleteProduct: 'Products/DeleteProduct',

  // typeproduct
  GetListTypeProduct: 'TypeProducts/GetListTypeProduct',
  AddTypeProduct: 'TypeProducts/AddTypeProduct',
  GetypeProduct: 'TypeProducts/GetypeProduct',
  DeleteTypeProduct: 'TypeProducts/DeleteTypeProduct',
  UpdateTypeProduct: 'TypeProducts/UpdateTypeProduct',

  // typeproject
  GetListTypeProject: 'TypeTypeProjects/GetListTypeProject',
  AddTypeTypeProject: 'TypeTypeProjects/AddTypeTypeProject',
  GetypeTypeProject: 'TypeTypeProjects/GetypeTypeProject',
  DeleteTypeTypeProject: 'TypeTypeProjects/DeleteTypeTypeProject',
  UpdateTypeTypeProject: 'TypeTypeProjects/UpdateTypeTypeProject',

  //project
  GetAllProject: 'Projects/GetAllProject',
  GetProject: 'Projects/GetProject',
  AddProject: 'Projects/AddProject',
  UpdateProject: 'Projects/UpdateProject',
  DeleteProject: 'Projects/DeleteProject',

  //Service
  GetServices: 'Services/GetService',

  //News
  GetNew:'News/GetNew',
  GetAllNew:'News/GetAllNew',
  AddNew:'News/AddNew',
  UpdateNew:'News/UpdateNew',
  DeleteNew:'News/DeleteNew',

  //orders
};
