// API wrapper class that contains all endpoints as simple functions
export class APIWrapper {
    #HOST

    // Sets the host URL of the API
    constructor(host) {
        this.#HOST = host
    }

    // Fetch wrapper to call the API
    async #fetch(relativePath, body) {
        return await fetch(this.#HOST+relativePath, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }

    // Sign up
    async SignUp(firstName, lastName, username, password, email, documentNumber, documentType, documentCountry) {
        return await this.#fetch('/signup', {
            first_name: firstName,
            last_name: lastName,
            username,
            password,
            email,
            document_number: documentNumber,
            document_type: documentType,
            document_country: documentCountry
        })
    }

    // Log in
    async LogIn(username, password, profile){
        return await this.#fetch('/login',{
            username,
            password,
            profile
        })
    }

    // Log out
    async LogOut(){
        return await this.#fetch('/logout', {})
    }

    // Send email verification
    async SendEmailVerification(email){
        return await this.#fetch('/send-email-verification', {
            email
        })
    }

    // Verify email
    async VerifyEmail(token){
        return await this.#fetch('/verify-email', {
            token
        })
    }

    // Forgot password
    async ForgotPassword(email){
        return await this.#fetch('/forgot-password', {
            email
        })
    }

    // Reset password
    async ResetPassword(token, password){
        return await this.#fetch('/reset-password', {
            token,
            password
        })
    }

    // Execute a method
    async Execute(modulesNames, objectName, methodName, parameters){
        return await this.#fetch('/execute', {
                modules: modulesNames,
                object: objectName,
                method: methodName,
                parameters
                }
            )
    }

    // Create a profile
    async CreateProfile(name, description){
        return await this.Execute(['Security'], 'Profile', 'CreateProfile', {name,  description})
    }

    // Update a profile
    async UpdateProfile(id, name, description){
        return await this.Execute(['Security'], 'Profile', 'UpdateProfile', {id, name,  description})
    }

    // Delete a profile
    async DeleteProfile(id){
        return await this.Execute(['Security'], 'Profile', 'DeleteProfile', {id})
    }

    // Search profile by name
    async SearchProfileByName(name){
        return await this.Execute(['Security'], 'Profile', 'SearchProfileByName', {name})
    }

    // Get all profiles
    async GetAllProfiles(){
        return await this.Execute(['Security'], 'Profile', 'GetAllProfiles')
    }

    // Assign profile permission
    async AssignProfilePermission(methodID, profileID) {
        return await this.Execute(['Security'], 'Security',
            'AssignProfilePermission', {
            method_id: methodID,
            profile_id: profileID
            })
    }

    // Revoke profile permission
    async RevokeProfilePermission(methodID, profileID) {
        return await this.Execute(['Security'], 'Security',
            'RevokeProfilePermission', {
            method_id: methodID,
            profile_id: profileID
            })
    }

    // Get profile permission methods
    async GetProfilePermissionsMethods(profileID, moduleID, objectID) {
        return await this.Execute(['Security'], 'Security',
            'GetProfilePermissionsMethods', {
            profile_id: profileID,
                module_id:moduleID,
                object_id:objectID
            })
    }

    // Get modules
    async GetModules() {
        return await this.Execute(['Security'], 'Security',
            'GetModules')
    }

    // Get objects by module ID
    async GetObjectsByModuleID(moduleID) {
        return await this.Execute(['Security'], 'Security',
            'GetObjectsByModuleID', {
                module_id:moduleID,
            })
    }

    // Get methods by object ID
    async GetMethodsByObjectID(objectID) {
        return await this.Execute(['Security'], 'Security',
            'GetMethodsByObjectID', {
                object_id:objectID,
            })
    }

    // Assign user profile
    async AssignUserProfile(username, profileID) {
        return await this.Execute(['Security'], 'Security',
            'AssignUserProfile', {
            username,
                profile_id: profileID
            })
    }

    // Revoke user profile
    async RevokeUserProfile(username, profileID) {
        return await this.Execute(['Security'], 'Security',
            'RevokeUserProfile', {
            username,
                profile_id: profileID
            })
    }

    // Search user by username
    async SearchUserByUsername(username, limit) {
        return await this.Execute(['Security'], 'User',
            'SearchUserByUsername', {
            username, limit
            })
    }

    // Create user
    async CreateUser(firstName, lastName, username, password, email, documentNumber, documentType, documentCountry) {
        return await this.Execute(['Security'], 'User',
            'CreateUser', {
            first_name:firstName,
                last_name:lastName,
                username,
                password,
                email,
                document_number:documentNumber,
                document_type: documentType,
                document_country:documentCountry
            })
    }

    // Get user details by user ID
    async GetUserDetailsByUserID(id) {
        return await this.Execute(['Security'], 'User',
            'GetUserDetailsByUserID', {
            id,
            })
    }

    // Update user by admin
    async UpdateUserByAdmin(id, firstName, lastName, username, documentNumber, documentType, documentCountry) {
        return await this.Execute(['Security'], 'User',
            'UpdateUserByAdmin', {
            id,
                first_name:firstName,
                last_name:lastName,
                username,
                document_number:documentNumber,
                document_type: documentType,
                document_country:documentCountry
            })
    }

    // Get all users
    async GetAllUsers(offset, limit) {
        return await this.Execute(['Security'], 'User',
            'GetAllUsers', {
            offset,
            limit
            })
    }

    // Get methods by profile ID and object ID
    async GetMethodsByProfileIDObjectID(profileID, objectID) {
        return await this.Execute(['Security'], 'Security',
            'GetMethodsByProfileIDObjectID', {
            profile_id: profileID,
            object_id: objectID
            })
    }

    // Set profile permissions
    async SetProfilePermissions(profileID, assignMethodIDs, revokeMethodIDs) {
        return await this.Execute(['Security'], 'Security',
            'SetProfilePermissions', {
            profile_id: profileID,
            assign_method_ids: assignMethodIDs,
            revoke_method_ids: revokeMethodIDs
            })
    }

    // Create publisher
    async CreatePublisher(name, description){
        return await this.Execute(['Document'], 'Publisher', 'CreatePublisher', {name,  description})
    }

    // Update publisher
    async UpdatePublisher(id, name, description){
        return await this.Execute(['Document'], 'Publisher', 'UpdatePublisher', {id, name,  description})
    }

    // Delete publisher
    async DeletePublisher(id){
        return await this.Execute(['Document'], 'Publisher', 'DeletePublisher', {id})
    }

    // Get all publishers
    async GetAllPublishers(){
        return await this.Execute(['Document'], 'Publisher', 'GetAllPublishers')
    }

    // Search publisher by name
    async SearchPublisherByName(name){
        return await this.Execute(['Document'], 'Publisher', 'SearchPublisherByName', {name})
    }

    // Create topic
    async CreateTopic(name, description){
        return await this.Execute(['Document'], 'Topic', 'CreateTopic', {name, description})
    }

    // Update topic
    async UpdateTopic(id, name, description){
        return await this.Execute(['Document'], 'Topic', 'UpdateTopic', {id, name, description})
    }

    // Delete topic
    async DeleteTopic(id){
        return await this.Execute(['Document'], 'Topic', 'DeleteTopic', {id})
    }

    // Get all topics
    async GetAllTopics(){
        return await this.Execute(['Document'], 'Topic', 'GetAllTopics')
    }

    // Search topic by name
    async SearchTopicByName(name){
        return await this.Execute(['Document'], 'Topic', 'SearchTopicByName', {name})
    }

    // Assign document topic
    async AssignDocumentTopic(documentID, topicID){
        return await this.Execute(['Document'], 'Topic', 'AssignDocumentTopic', {document_id: documentID, topic_id: topicID})
    }

    // Remove document topic
    async RemoveDocumentTopic(documentID, topicID){
        return await this.Execute(['Document'], 'Topic', 'RemoveDocumentTopic', {document_id: documentID, topic_id: topicID})
    }
}
