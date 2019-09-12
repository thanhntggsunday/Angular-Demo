export class SystemConstants {
    public static CURRENT_USER = "CURRENT_USER";    
    public static BASE_API = "http://localhost:57363";
    public static OAuthen_API = "http://localhost:57363/oauth-token";

    public static API_ROLE_SERVICE_GET_ALL_PAGING = "/api/RoleService/GetAllPaging"
    public static API_ROLE_SERVICE_GET_ALL = "/api/RoleService/GetAll"
    public static API_ROLE_SERVICE_CREATE = "/api/RoleService/Create";
    public static API_ROLE_SERVICE_DELETE = "/api/RoleService/Delete";

    public static API_USER_ROLES_SERVICE_GET_ALL = "/api/UserRolesService/GetAllUserRoles";
    public static API_USER_ROLES_SERVICE_GET_ALL_USERS_AND_ROLES_LIST = "/api/UserRolesService/GetAllUsersAndRolesList";
    public static API_USER_ROLES_SERVICE_CREATE = "/api/UserRolesService/CreateUserRole";
    public static API_USER_ROLES_SERVICE_DELETE = "/api/UserRolesService/DeleteUserRole";

    public static API_PRODUCT_CATEGORY_SERVICE_GET_ALL = "/api/ProductCategoryService/GetAll";
    public static API_PRODUCT_CATEGORY_SERVICE_CREATE = "/api/ProductCategoryService/Create";
    public static API_PRODUCT_CATEGORY_SERVICE_UPDATE = "/api/ProductCategoryService/Update";
    public static API_PRODUCT_CATEGORY_SERVICE_DELETE = "/api/ProductCategoryService/Delete";
    public static API_PRODUCT_CATEGORY_SERVICE_GET_BY_ID = "/api/ProductCategoryService/GetById";

    public static API_UPLOAD_SERVICE_UPLOAD_FILE = "/api/AjaxFileUploadService/UploadFile";

    public static API_PRODUCT_SERVICE_GET_ALL_PAGING = "/api/ProductService/GetAllPaging";
    public static API_PRODUCT_SERVICE_CREATE = "/api/ProductService/Create";
    public static API_PRODUCT_SERVICE_UPDATE = "/api/ProductService/Update";
    public static API_PRODUCT_SERVICE_DELETE = "/api/ProductService/Delete";
    public static API_PRODUCT_SERVICE_GET_BY_ID = "/api/ProductService/GetById";

}