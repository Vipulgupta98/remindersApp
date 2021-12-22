# Business Directory Application Code Review

# API Briefs
1. AddNewBusiness -

    - Method - Post
    - Request - http://localhost:3001/business
    - Decription - Creates a business entry into the directory.
    - Error handling - All business parameters are required and if business category Id isn't valid throws a error 'Business_category_does_not_exists'.
1. editBusiness -

    - Method - Put
    - Request - http://localhost:3001/business
    - Decription - Edits a business entry into the directory.
    - Error handling - All business parameters are not required except businessId which if entered wrong throws error 'Business_profile_does_not_exists' and if business category Id isn't valid throws a error 'Business_category_does_not_exists'.
1. getAllBusiness -

    - Method - get
    - Request - http://localhost:3001/all-business
    - Decription - gets all business entry into the directory.
    - Error handling - No business parameters are required.
1. getBusinessByName -

    - Method - Get
    - Request - http://localhost:3001/get-business
    - Decription - gets a specific business entry from the directory.
    - Error handling - Only businessName parameters are required and if businessName isn't valid throws a error 'Business_profile_does_not_exists'.
1. deleteBusiness-

    - Method - delete
    - Request - http://localhost:3001/delete-business
    - Decription - deletes a specific business entry from the directory.
    - Error handling -Only businessName parameters are required and if businessName isn't valid throws a error 'Business_profile_does_not_exists'.
1. AddBusinessCategory-

    - Method - post
    - Request - http://localhost:3001/businessCategory
    - Decription - adds a specific business Category entry into the directory.
    - Error handling -Only businessCategory parameter is required and if businessCategory isn't provided throws a validation error 'Please_enter_a_valid_business_Category'. If category already exists throws error 'Business_category_already_exists'.
1. allBusinessCategory-

    - Method - post
    - Request - http://localhost:3001/all-businessCategory
    - Decription - gets all business Category entry from the directory.
    - Error handling - No parameter is required
1. AddBusinessCategory-

    - Method - post
    - Request - http://localhost:3001/delete-businessCategory
    - Decription - deletes a specific business Category entry into the directory.
    - Error handling -Only businessCategory parameter is required and if businessCategory isn't provided throws a validation error 'Please_enter_a_valid_business_Category'. If category doesn't exists throws error 'Business_category_doesn't_exists'.

NOTE: All validations necessary, locales files with constants, and yaml have been taken care of.
#
# Postman Link -
    https://www.getpostman.com/collections/873b7c66d78dbe7154c6

#
