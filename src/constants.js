const defaultApiHost = process.env.COS_API_HOST || 'https://api.hubapi.com';

export default {
  api: {
    deals: {
      recentlyCreated: `${defaultApiHost}/deals/v1/deal/recent/created`
    },
    emailEvents: {
      campaignsWithRecentActivity: `${defaultApiHost}/email/public/v1/campaigns`,
      campaign: `${defaultApiHost}/email/public/v1/campaigns/{campaignId}`
    },
    forms: {
      submitForm:
        'https://forms.hubspot.com/uploads/form/v2/{portalId}/{formId}'
    },
    social: {
      channels: `${defaultApiHost}/broadcast/v1/channels/setting/publish/current`,
      createBroadcastMessage: `${defaultApiHost}/broadcast/v1/broadcasts`
    },
    domains: {
      getAll: `${defaultApiHost}/content/api/v4/domains`,
      byId: `${defaultApiHost}/content/api/v4/domains/{id}`
    },
    layouts: {
      getAll: `${defaultApiHost}/content/api/v2/layouts`,
      byId: `${defaultApiHost}/content/api/v2/layouts/{id}`
    },
    email: {
      getSubscriptions: `${defaultApiHost}/email/public/v1/subscriptions`
    },
    blog: {
      authors: `${defaultApiHost}/blogs/v3/blog-authors`,
      authorById: `${defaultApiHost}/blogs/v3/blog-authors/{id}`,
      authorSearch: `${defaultApiHost}/blogs/v3/blog-authors/search`,
      comments: `${defaultApiHost}/comments/v3/comments`,
      commentById: `${defaultApiHost}/comments/v3/comments/{id}`,
      restoreDeletedComment: `${defaultApiHost}/comments/v3/comments/{id}/restore`,
      getAll: `${defaultApiHost}/content/api/v2/blogs`,
      byId: `${defaultApiHost}/content/api/v2/blogs/{blog_id}`,
      getVersions: `${defaultApiHost}/content/api/v2/blogs/{blog_id}/versions`,
      getVersion: `${defaultApiHost}/content/api/v2/blogs/{blog_id}/versions/{revision_id}`,
      posts: `${defaultApiHost}/content/api/v2/blog-posts`,
      postById: `${defaultApiHost}/content/api/v2/blog-posts/{id}`,
      clonePostById: `${defaultApiHost}/content/api/v2/blog-posts/{id}/clone`,
      restorePostById: `${defaultApiHost}/content/api/v2/blog-posts/{id}/restore-deleted`,
      publishOrSchedulePost: `${defaultApiHost}/content/api/v2/blog-posts/{id}/publish-action`,
      postAutoSaveBuffer: `${defaultApiHost}/content/api/v2/blog-posts/{id}/buffer`,
      validatePostAutoSaveBuffer: `${defaultApiHost}/content/api/v2/blog-posts/{id}/validate-buffer`,
      postAutoSaveBufferStatus: `${defaultApiHost}/content/api/v2/blog-posts/{id}/has-buffered-changes`,
      postVersions: `${defaultApiHost}/content/api/v2/blog-posts/{id}/versions`,
      restorePostVersion: `${defaultApiHost}/content/api/v2/blog-posts/{id}/versions/restore`,
      postVersionById: `${defaultApiHost}/content/api/v2/blog-posts/{id}/versions/{version_id}`,
      pushPostAutosaveBufferToLive: `${defaultApiHost}/content/api/v2/blog-posts/{id}/push-buffer-live`,
      topics: `${defaultApiHost}/blogs/v3/topics`,
      groupTopics: `${defaultApiHost}/blogs/v3/topics/group-topics`,
      topic: `${defaultApiHost}/blogs/v3/topics/{id}`,
      topicSearch: `${defaultApiHost}/blogs/v3/topics/search`
    },
    calendar: {
      events: `${defaultApiHost}/calendar/v1/events`,
      createTask: `${defaultApiHost}/calendar/v1/events/task`,
      taskById: `${defaultApiHost}/calendar/v1/events/task/{taskId}`
    },
    contacts: {
      getAll: `${defaultApiHost}/contacts/v1/lists/all/contacts/all`,
      byId: `${defaultApiHost}/contacts/v1/contact/vid/{vid}/profile`,
      byEmail: `${defaultApiHost}/contacts/v1/contact/email/{email}/profile`,
      byUtk: `${defaultApiHost}/contacts/v1/contact/utk/{utk}/profile`,
      createContact: `${defaultApiHost}/contacts/v1/contact/createOrUpdate/email/{email}/`,
      batchUpdateContacts: `${defaultApiHost}/contacts/v1/contact/batch/`
    },
    company: {
      create: `${defaultApiHost}/companies/v2/companies/`,
      batchUpdate: `${defaultApiHost}/companies/v1/batch-async/update`,
      byId: `${defaultApiHost}/companies/v2/companies/{companyId}`,
      byDomain: `${defaultApiHost}/companies/v2/domains/{domain}/companies`
    },
    workflows: {
      create: `${defaultApiHost}/automation/v3/workflows`,
      get: `${defaultApiHost}/automation/v3/workflows/{id}`
    }
  }
};
