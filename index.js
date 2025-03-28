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
        return await this.Execute(['Library'], 'Publisher', 'CreatePublisher', {name,  description})
    }

    // Update publisher
    async UpdatePublisher(id, name, description){
        return await this.Execute(['Library'], 'Publisher', 'UpdatePublisher', {id, name,  description})
    }

    // Delete publisher
    async DeletePublisher(id){
        return await this.Execute(['Library'], 'Publisher', 'DeletePublisher', {id})
    }

    // Get all publishers
    async GetAllPublishers(){
        return await this.Execute(['Library'], 'Publisher', 'GetAllPublishers')
    }

    // Search publisher by name
    async SearchPublisherByName(name){
        return await this.Execute(['Library'], 'Publisher', 'SearchPublisherByName', {name})
    }

    // Create topic
    async CreateTopic(name, description){
        return await this.Execute(['Library'], 'Topic', 'CreateTopic', {name, description})
    }

    // Update topic
    async UpdateTopic(id, name, description){
        return await this.Execute(['Library'], 'Topic', 'UpdateTopic', {id, name, description})
    }

    // Delete topic
    async DeleteTopic(id){
        return await this.Execute(['Library'], 'Topic', 'DeleteTopic', {id})
    }

    // Get all topics
    async GetAllTopics(){
        return await this.Execute(['Library'], 'Topic', 'GetAllTopics')
    }

    // Search topic by name
    async SearchTopicByName(name){
        return await this.Execute(['Library'], 'Topic', 'SearchTopicByName', {name})
    }

    // Assign document topic
    async AssignDocumentTopic(documentID, topicID){
        return await this.Execute(['Library', 'Document'], 'Topic', 'AssignDocumentTopic', {document_id: documentID, topic_id: topicID})
    }

    // Remove document topic
    async RemoveDocumentTopic(documentID, topicID){
        return await this.Execute(['Library', 'Document'], 'Topic', 'RemoveDocumentTopic', {document_id: documentID, topic_id: topicID})
    }

    // Get all countries
    async GetAllCountries(){
        return await this.Execute(['Library', 'Other'], 'Country', 'GetAllCountries')
    }

    // Search country by name
    async SearchCountryByName(name){
        return await this.Execute(['Library', 'Other'], 'Country', 'SearchCountryByName', {name})
    }

    // Get all languages
    async GetAllLanguages(){
        return await this.Execute(['Library', 'Other'], 'Language', 'GetAllLanguages')
    }

    // Search language by name
    async SearchLanguageByName(name){
        return await this.Execute(['Library', 'Other'], 'Language', 'SearchLanguageByName', {name})
    }

    // Create a location
    async CreateLocation(floor, area){
        return await this.Execute(['Library'], 'Location', 'CreateLocation', {floor, area})
    }

    // Update a location
    async UpdateLocation(id, floor, area){
        return await this.Execute(['Library'], 'Location', 'UpdateLocation', {id, floor, area})
    }

    // Delete a location
    async DeleteLocation(id){
        return await this.Execute(['Library'], 'Location', 'DeleteLocation', {id})
    }

    // Get all locations
    async GetAllLocations(offset, limit){
        return await this.Execute(['Library'], 'Location', 'GetAllLocations', {offset, limit})
    }

    // Assign document language
    async AssignDocumentLanguage(documentID, languageID){
        return await this.Execute(['Library', 'Document'], 'Language', 'AssignDocumentLanguage', {document_id: documentID, language_id: languageID})
    }

    // Remove document language
    async RemoveDocumentLanguage(documentID, languageID){
        return await this.Execute(['Library', 'Document'], 'Language', 'RemoveDocumentLanguage', {document_id: documentID, language_id: languageID})
    }

    // Get document topics by document ID
    async GetDocumentTopicsByDocumentID(id){
        return await this.Execute(['Library', 'Document'], 'Topic', 'GetDocumentTopicsByDocumentID', {id})
    }

    // Get document languages by document ID
    async GetDocumentLanguagesByDocumentID(id){
        return await this.Execute(['Library', 'Document'], 'Language', 'GetDocumentLanguagesByDocumentID', {id})
    }

    // Assign document location section
    async AssignDocumentLocationSection(documentID, locationSectionID){
        return await this.Execute(['Library', 'Document'], 'LocationSection', 'AssignDocumentLocationSection', {document_id: documentID, location_section_id: locationSectionID})
    }

    // Remove document location section
    async RemoveDocumentLocationSection(documentID, locationSectionID){
        return await this.Execute(['Library', 'Document'], 'LocationSection', 'RemoveDocumentLocationSection', {document_id: documentID, location_section_id: locationSectionID})
    }

    // Get document location sections by document ID
    async GetDocumentLocationSectionsByDocumentID(id){
        return await this.Execute(['Library', 'Document'], 'LocationSection', 'GetDocumentLocationSectionsByDocumentID', {id})
    }

    // Create location section
    async CreateLocationSection(locationID, name){
        return await this.Execute(['Library'], 'LocationSection', 'CreateLocationSection', {location_id: locationID, name})
    }

    // Update location section
    async UpdateLocationSection(id, name){
        return await this.Execute(['Library'], 'LocationSection', 'UpdateLocationSection', {id, name})
    }

    // Delete location section
    async DeleteLocationSection(id){
        return await this.Execute(['Library'], 'LocationSection', 'DeleteLocationSection', {id})
    }

    // Get all location sections
    async GetAllLocationSections(offset, limit){
        return await this.Execute(['Library'], 'LocationSection', 'GetAllLocationSections', {offset, limit})
    }

    // Get location sections by location ID
    async GetLocationSectionsByLocationID(locationID){
        return await this.Execute(['Library'], 'LocationSection', 'GetLocationSectionsByLocationID', {location_id: locationID})
    }

}
