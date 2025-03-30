// API wrapper class that contains all endpoints as simple functions
export class APIWrapper {
    #HOST

    // Sets the host URL of the API
    constructor(host) {
        this.#HOST = host
    }

    // Fetch wrapper to call the API
    async #fetch(relativePath, body) {
        return await fetch(this.#HOST + relativePath, {
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
    async LogIn(username, password, profile) {
        return await this.#fetch('/login', {
            username,
            password,
            profile
        })
    }

    // Log out
    async LogOut() {
        return await this.#fetch('/logout', {})
    }

    // Send email verification
    async SendEmailVerification(email) {
        return await this.#fetch('/send-email-verification', {
            email
        })
    }

    // Verify email
    async VerifyEmail(token) {
        return await this.#fetch('/verify-email', {
            token
        })
    }

    // Forgot password
    async ForgotPassword(email) {
        return await this.#fetch('/forgot-password', {
            email
        })
    }

    // Reset password
    async ResetPassword(token, password) {
        return await this.#fetch('/reset-password', {
            token,
            password
        })
    }

    // Execute a method
    async Execute(modulesNames, objectName, methodName, parameters) {
        return await this.#fetch('/execute', {
                modules: modulesNames,
                object: objectName,
                method: methodName,
                parameters
            }
        )
    }

    // Create a profile
    async CreateProfile(name, description) {
        return await this.Execute(['Security'],
            'Profile',
            'CreateProfile',
            {name, description}
        )
    }

    // Update a profile
    async UpdateProfile(id, name, description) {
        return await this.Execute(['Security'],
            'Profile',
            'UpdateProfile',
            {id, name, description}
        )
    }

    // Remove a profile
    async RemoveProfile(id) {
        return await this.Execute(['Security'],
            'Profile',
            'RemoveProfile',
            {id}
        )
    }

    // Search profile by name
    async SearchProfileByName(name) {
        return await this.Execute(['Security'],
            'Profile',
            'SearchProfileByName',
            {name}
        )
    }

    // Get all profiles
    async GetAllProfiles() {
        return await this.Execute(['Security'], 'Profile', 'GetAllProfiles')
    }

    // Create profile permission
    async CreateProfilePermission(methodID, profileID) {
        return await this.Execute(['Security'], 'Security',
            'CreateProfilePermission', {
                method_id: methodID,
                profile_id: profileID
            }
        )
    }

    // Remove profile permission
    async RemoveProfilePermission(methodID, profileID) {
        return await this.Execute(['Security'], 'Security',
            'RemoveProfilePermission', {
                method_id: methodID,
                profile_id: profileID
            }
        )
    }

    // Get profile permission methods
    async GetProfilePermissionsMethods(profileID, moduleID, objectID) {
        return await this.Execute(['Security'], 'Security',
            'GetProfilePermissionsMethods', {
                profile_id: profileID,
                module_id: moduleID,
                object_id: objectID
            }
        )
    }

    // Get modules
    async GetModules() {
        return await this.Execute(['Security'], 'Security',
            'GetModules'
        )
    }

    // Get objects by module ID
    async GetObjectsByModuleID(moduleID) {
        return await this.Execute(['Security'], 'Security',
            'GetObjectsByModuleID', {
                module_id: moduleID,
            }
        )
    }

    // Get methods by object ID
    async GetMethodsByObjectID(objectID) {
        return await this.Execute(['Security'], 'Security',
            'GetMethodsByObjectID', {
                object_id: objectID,
            }
        )
    }

    // Create user profile
    async CreateUserProfile(username, profileID) {
        return await this.Execute(['Security'], 'Security',
            'CreateUserProfile', {
                username,
                profile_id: profileID
            }
        )
    }

    // Remove user profile
    async RemoveUserProfile(username, profileID) {
        return await this.Execute(['Security'], 'Security',
            'RemoveUserProfile', {
                username,
                profile_id: profileID
            }
        )
    }

    // Search user by username
    async SearchUserByUsername(username, limit) {
        return await this.Execute(['Security'], 'User',
            'SearchUserByUsername', {
                username, limit
            }
        )
    }

    // Create user
    async CreateUser(firstName, lastName, username, password, email, documentNumber, documentType, documentCountry) {
        return await this.Execute(['Security'], 'User',
            'CreateUser', {
                first_name: firstName,
                last_name: lastName,
                username,
                password,
                email,
                document_number: documentNumber,
                document_type: documentType,
                document_country: documentCountry
            }
        )
    }

    // Get user details by user ID
    async GetUserDetailsByUserID(id) {
        return await this.Execute(['Security'], 'User',
            'GetUserDetailsByUserID', {
                id,
            }
        )
    }

    // Update user by admin
    async UpdateUserByAdmin(id, firstName, lastName, username, documentNumber, documentType, documentCountry) {
        return await this.Execute(['Security'], 'User',
            'UpdateUserByAdmin', {
                id,
                first_name: firstName,
                last_name: lastName,
                username,
                document_number: documentNumber,
                document_type: documentType,
                document_country: documentCountry
            }
        )
    }

    // Get all users
    async GetAllUsers(offset, limit) {
        return await this.Execute(['Security'], 'User',
            'GetAllUsers', {
                offset,
                limit
            }
        )
    }

    // Get methods by profile ID and object ID
    async GetMethodsByProfileIDObjectID(profileID, objectID) {
        return await this.Execute(['Security'], 'Security',
            'GetMethodsByProfileIDObjectID', {
                profile_id: profileID,
                object_id: objectID
            }
        )
    }

    // Set profile permissions
    async SetProfilePermissions(profileID, assignMethodIDs, revokeMethodIDs) {
        return await this.Execute(['Security'], 'Security',
            'SetProfilePermissions', {
                profile_id: profileID,
                assign_method_ids: assignMethodIDs,
                revoke_method_ids: revokeMethodIDs
            }
        )
    }

    // Create publisher
    async CreatePublisher(name, description) {
        return await this.Execute(['Library'],
            'Publisher',
            'CreatePublisher',
            {name, description}
        )
    }

    // Update publisher
    async UpdatePublisher(id, name, description) {
        return await this.Execute(['Library'],
            'Publisher',
            'UpdatePublisher',
            {id, name, description}
        )
    }

    // Remove publisher
    async RemovePublisher(id) {
        return await this.Execute(['Library'],
            'Publisher',
            'RemovePublisher',
            {id}
        )
    }

    // Get all publishers
    async GetAllPublishers() {
        return await this.Execute(['Library'], 'Publisher', 'GetAllPublishers')
    }

    // Search publisher by name
    async SearchPublisherByName(name, limit) {
        return await this.Execute(['Library'],
            'Publisher',
            'SearchPublisherByName',
            {name, limit}
        )
    }

    // Create topic
    async CreateTopic(name, description) {
        return await this.Execute(['Library'],
            'Topic',
            'CreateTopic',
            {name, description}
        )
    }

    // Update topic
    async UpdateTopic(id, name, description) {
        return await this.Execute(['Library'],
            'Topic',
            'UpdateTopic',
            {id, name, description}
        )
    }

    // Remove topic
    async RemoveTopic(id) {
        return await this.Execute(['Library'], 'Topic', 'RemoveTopic', {id})
    }

    // Get all topics
    async GetAllTopics() {
        return await this.Execute(['Library'], 'Topic', 'GetAllTopics')
    }

    // Search topic by name
    async SearchTopicByName(name, limit) {
        return await this.Execute(['Library'],
            'Topic',
            'SearchTopicByName',
            {name, limit}
        )
    }

    // Create document topic
    async CreateDocumentTopic(documentID, topicID) {
        return await this.Execute(['Library', 'Document'],
            'Topic',
            'CreateDocumentTopic',
            {document_id: documentID, topic_id: topicID}
        )
    }

    // Remove document topic
    async RemoveDocumentTopic(documentID, topicID) {
        return await this.Execute(['Library', 'Document'],
            'Topic',
            'RemoveDocumentTopic',
            {document_id: documentID, topic_id: topicID}
        )
    }

    // Get all countries
    async GetAllCountries() {
        return await this.Execute(['Library', 'Other'],
            'Country',
            'GetAllCountries'
        )
    }

    // Search country by name
    async SearchCountryByName(name, limit) {
        return await this.Execute(['Library', 'Other'],
            'Country',
            'SearchCountryByName',
            {name, limit}
        )
    }

    // Get all languages
    async GetAllLanguages() {
        return await this.Execute(['Library', 'Other'],
            'Language',
            'GetAllLanguages'
        )
    }

    // Search language by name
    async SearchLanguageByName(name) {
        return await this.Execute(['Library', 'Other'],
            'Language',
            'SearchLanguageByName',
            {name}
        )
    }

    // Create a location
    async CreateLocation(floor, area) {
        return await this.Execute(['Library'],
            'Location',
            'CreateLocation',
            {floor, area}
        )
    }

    // Update a location
    async UpdateLocation(id, floor, area) {
        return await this.Execute(['Library'],
            'Location',
            'UpdateLocation',
            {id, floor, area}
        )
    }

    // Remove a location
    async RemoveLocation(id) {
        return await this.Execute(['Library'],
            'Location',
            'RemoveLocation',
            {id}
        )
    }

    // Get all locations
    async GetAllLocations(offset, limit) {
        return await this.Execute(['Library'],
            'Location',
            'GetAllLocations',
            {offset, limit}
        )
    }

    // Create document language
    async CreateDocumentLanguage(documentID, languageID) {
        return await this.Execute(['Library', 'Document'],
            'Language',
            'CreateDocumentLanguage',
            {document_id: documentID, language_id: languageID}
        )
    }

    // Remove document language
    async RemoveDocumentLanguage(documentID, languageID) {
        return await this.Execute(['Library', 'Document'],
            'Language',
            'RemoveDocumentLanguage',
            {document_id: documentID, language_id: languageID}
        )
    }

    // Get document topics by document ID
    async GetDocumentTopicsByDocumentID(id) {
        return await this.Execute(['Library', 'Document'],
            'Topic',
            'GetDocumentTopicsByDocumentID',
            {id}
        )
    }

    // Get document languages by document ID
    async GetDocumentLanguagesByDocumentID(id) {
        return await this.Execute(['Library', 'Document'],
            'Language',
            'GetDocumentLanguagesByDocumentID',
            {id}
        )
    }

    // Create document location section
    async CreateDocumentLocationSection(documentID, locationSectionID) {
        return await this.Execute(['Library', 'Document'],
            'LocationSection',
            'CreateDocumentLocationSection',
            {document_id: documentID, location_section_id: locationSectionID}
        )
    }

    // Remove document location section
    async RemoveDocumentLocationSection(documentID, locationSectionID) {
        return await this.Execute(['Library', 'Document'],
            'LocationSection',
            'RemoveDocumentLocationSection',
            {document_id: documentID, location_section_id: locationSectionID}
        )
    }

    // Get document location sections by document ID
    async GetDocumentLocationSectionsByDocumentID(id) {
        return await this.Execute(['Library', 'Document'],
            'LocationSection',
            'GetDocumentLocationSectionsByDocumentID',
            {id}
        )
    }

    // Create location section
    async CreateLocationSection(locationID, name) {
        return await this.Execute(['Library'],
            'LocationSection',
            'CreateLocationSection',
            {location_id: locationID, name}
        )
    }

    // Update location section
    async UpdateLocationSection(id, name) {
        return await this.Execute(['Library'],
            'LocationSection',
            'UpdateLocationSection',
            {id, name}
        )
    }

    // Remove location section
    async RemoveLocationSection(id) {
        return await this.Execute(['Library'],
            'LocationSection',
            'RemoveLocationSection',
            {id}
        )
    }

    // Get all location sections
    async GetAllLocationSections(offset, limit) {
        return await this.Execute(['Library'],
            'LocationSection',
            'GetAllLocationSections',
            {offset, limit}
        )
    }

    // Get location sections by location ID
    async GetLocationSectionsByLocationID(locationID) {
        return await this.Execute(['Library'],
            'LocationSection',
            'GetLocationSectionsByLocationID',
            {location_id: locationID}
        )
    }

    // Create magazine
    async CreateMagazine(name, description, releaseDate) {
        return await this.Execute(['Library', 'Document', 'Magazine'],
            'Magazine',
            'CreateMagazine',
            {name, description, release_date: releaseDate}
        )
    }

    // Update magazine
    async UpdateMagazine(id, name, description, releaseDate) {
        return await this.Execute(['Library', 'Document', 'Magazine'],
            'Magazine',
            'UpdateMagazine',
            {id, name, description, release_date: releaseDate}
        )
    }

    // Remove magazine
    async RemoveMagazine(id) {
        return await this.Execute(['Library', 'Document', 'Magazine'],
            'Magazine',
            'RemoveMagazine',
            {id}
        )
    }

    // Get all magazines
    async GetAllMagazines(offset, limit) {
        return await this.Execute(['Library', 'Document', 'Magazine'],
            'Magazine',
            'GetAllMagazines',
            {offset, limit}
        )
    }

    // Search for a magazine by name
    async SearchMagazineByName(name, limit) {
        return await this.Execute(['Library', 'Document', 'Magazine'],
            'Magazine',
            'SearchMagazineByName',
            {name, limit}
        )
    }

    // Create article
    async CreateArticle(title, description, releaseDate, pages, author, topicIDs, locationSectionIDs, languageIDs) {
        return await this.Execute(['Library', 'Document', 'Article'],
            'Article',
            'CreateArticle',
            {document_title: title, document_description: description, document_release_date: releaseDate, document_pages: pages, document_author: author, document_topic_ids: topicIDs, document_location_section_ids: locationSectionIDs, document_language_ids: languageIDs}
        )
    }

    // Create book
    async CreateBook(title, description, releaseDate, pages, author, topicIDs, locationSectionIDs, languageIDs, isbn, publisherID) {
        return await this.Execute(['Library', 'Document', 'Book'],
            'Book',
            'CreateBook',
            {document_title: title, document_description: description, document_release_date: releaseDate, document_pages: pages, document_author: author, document_topic_ids: topicIDs, document_location_section_ids: locationSectionIDs, document_language_ids: languageIDs, book_isbn: isbn, book_publisher_id: publisherID}
        )
    }

    // Create magazine issue
    async CreateMagazineIssue(title, description, releaseDate, pages, author, topicIDs, locationSectionIDs, languageIDs, magazineID, magazineIssueNumber) {
        return await this.Execute(['Library', 'Document', 'Magazine'],
            'MagazineIssue',
            'CreateMagazineIssue',
            {document_title: title, document_description: description, document_release_date: releaseDate, document_pages: pages, document_author: author, document_topic_ids: topicIDs, document_location_section_ids: locationSectionIDs, document_language_ids: languageIDs, magazine_id: magazineID, magazine_issue_number: magazineIssueNumber}
        )
    }

    // Create thesis
    async CreateThesis(documentTitle, documentDescription, documentReleaseDate, documentPages, documentAuthor, documentTopicIDs, documentLocationSectionIDs, documentLanguageIDs) {
        return await this.Execute(['Library', 'Document', 'Thesis'],
            'Thesis',
            'CreateThesis',
            {document_title: documentTitle, document_description: documentDescription, document_release_date: documentReleaseDate, document_pages: documentPages, document_author: documentAuthor, document_topic_ids: documentTopicIDs, document_location_section_ids: documentLocationSectionIDs, document_language_ids: documentLanguageIDs}
        )
    }
}