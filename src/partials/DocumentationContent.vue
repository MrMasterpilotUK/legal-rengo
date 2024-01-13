<template>
  <div>
    <header class="mb-6">
      <h1 class="h3 text-slate-800 mb-4 dark:text-slate-200">TERMS OF USE</h1>
      <p class="text-lg text-slate-600 dark:text-slate-400">This was last updated on 11/01/2024</p>
    </header>
    <div class="text-slate-600 dark:text-slate-400 space-y-6">

      <!-- Article section -->
      <div class="space-y-6">
        <div class="space-y-4">
          <!-- HTML Bookmark -->
          <!-- The data-scrollspy-target attribute makes the scrollspy work -->
          <h2 id="agree-t-legal" data-scrollspy-target class="h4 text-slate-800 scroll-mt-24 dark:text-slate-200">AGREEMENT TO OUR LEGAL TERMS</h2>
          <p>
            We are <u>Rengo</u> ("<b>Company</b>", "<b>we</b>", "<b>our</b>").
          </p>
          <p>
            We operate, as well as any other related products and services that refer or link to these Terms of Use (collectively, the "<b>Services</b>").
          </p>
          <p>
            You can contact us by email at <a class="text-red-500 font-medium hover:underline" href="mailto:contact@rengorbx.co.uk">contact@rengorbx.co.uk</a>
          </p>
          <p>
            These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (<b>"You"</b>), and <b>Rengo</b>, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. <em>IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</em>
          </p>
          <p>
            Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the "Last updated"  date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
          </p>
          <p class="text-red-500">
            <center><b><em>We recommend that you print a copy of these Legal Terms for your records.</em></b></center>
          </p>
        </div>
        <div class="space-y-6">
          <div class="space-y-4">
          <h2 data-scrollspy-target class="h4 text-slate-800 scroll-mt-24 dark:text-slate-200">INTERLLECTUAL PROPERTY RIGHTS</h2>
          <h3 id="our-services" data-scrollspy-target class="h4 text-slate-800 scroll-mt-24 dark:text-slate-200">Our interllectual property</h3>
          <p>
            We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks"). 
          </p>
          <h3 id="use-our-services" data-scrollspy-target class="h4 text-slate-800 scroll-mt-24 dark:text-slate-200">Your use of our Services</h3>
          <p>
            The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
          </p>
          <p>
            Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
          </p>
          <p>
            The Content and Marks are provided in or through the Services <b>"AS IS"</b> for your personal, non-commercial use or internal business purpose only.
          </p>
          </div>
        </div>
      </div>

      <!-- Article section -->
      <div class="space-y-6">
        <div class="space-y-4">
          <!-- HTML Bookmark -->
          <!-- The data-scrollspy-target attribute makes the scrollspy work -->
          <h2 id="api-structure" data-scrollspy-target class="h4 text-slate-800 scroll-mt-24 dark:text-slate-200">AGREEMENT TO OUR LEGAL TERMS</h2>
          <p>
            The Marketing API generally follows REST conventions, with some deviations.
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li>Resources are typically nouns like subscribers or campaigns.</li>
            <li>Subresources can be multiply nested under resources.</li>
            <li>Actions are usually represented by HTTP methods.</li>
            <li>Responses use the generic JSON content type.</li>
          </ul>
          <p>
            We use the API Specification to describe each endpoint. The API self-description also contains type information to help you error-check your requests.
          </p>
          <p>
            The root url for the API is <span class="font-medium text-slate-800 underline dark:text-slate-200">https://&lt;dc&gt;.api.docs.com/3.0/</span>. The &lt;dc&gt; part of the URL corresponds to the data center for your account. For example, if the data center for your account is us6, all API endpoints for your account are available relative to <span class="font-medium text-slate-800 underline dark:text-slate-200">https://us6.api.docs.com/3.0/</span>.
          </p>
          <p>
            There are a few ways to find your data center. It's the first part of the URL you see in the API keys section of your account; if the URL is <span class="font-medium text-slate-800 underline dark:text-slate-200">https://us6.docs.com/account/api/</span>, then the data center subdomain is us6. It's also appended to your API key in the form key-dc; if your API key is <span class="font-medium text-slate-800 underline dark:text-slate-200">0123456789abcdef0123456789abcde-us6</span>, then the data center subdomain is us6. And finally, if you're connecting via OAuth 2, you can find the data center associated with the token via the OAuth Metadata endpoint; for more information, see the OAuth guide.
          </p>
          <div class="text-sm p-4 bg-slate-50 border border-slate-200 rounded dark:bg-slate-800 dark:border-slate-700">
            <div class="flex items-center">
              <svg class="fill-purple-500 shrink-0 mr-4" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Zm1-3H7V4h2v5Z" />
              </svg>
              <p>
                Note: You will see the &lt;dc&gt; placeholder or an actual data center subdomain in examples throughout this documentation. Either way, make sure to replace it in your code with the data center subdomain for your account, or your request may generate an error.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Article section -->
      <div class="space-y-6">
        <div class="space-y-4">
          <!-- HTML Bookmark -->
          <!-- The data-scrollspy-target attribute makes the scrollspy work -->
          <h2 id="connect-api" data-scrollspy-target class="h4 text-slate-800 scroll-mt-24 dark:text-slate-200">Connecting to the API</h2>
          <p>
            You can authenticate requests using either your API key or an OAuth access token, depending on your use case. You should use an API key if you're writing code that tightly couples your application data to your Docs account data; if you ever need to access someone else's Docs account data, you should use OAuth 2.
          </p>
          <p>
            For more information on the Docs OAuth 2 flow, see Access Data on Behalf of Other Users with OAuth 2.
          </p>
          <p>
            If you're integrating with the Docs API using one of the <a class="text-blue-600 font-medium hover:underline" href="#0">official client libraries</a>, you won't need to worry about the implementation details for authentication.
          </p>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-[650] text-slate-800 dark:text-slate-200">Authenticate with an API key or OAuth 2 token</h3>
          <p>
            API keys and OAuth 2 tokens can be used to make authenticated requests the same way. We'll refer to both as tokens.
          </p>
          <p>
            You can either use HTTP Basic Authentication or Bearer Authentication.
          </p>
          <p>
            HTTP Basic Authentication:
          </p>
<pre class="overflow-x-auto text-sm text-slate-400 bg-slate-800 border border-slate-700 p-4 rounded">
<code class="font-pt-mono"><span class="text-teal-500">curl</span> --request GET \
      
--url <span class="text-purple-500">'https://&lt;dc&gt;.api.docs.com/3.0/'</span> \
      
--user 'anystring:TOKEN</code>
</pre>
        </div>
      </div>

      <!-- Article section -->
      <div class="space-y-6">
        <div class="space-y-4">
          <!-- HTML Bookmark -->
          <!-- The data-scrollspy-target attribute makes the scrollspy work -->
          <h2 id="api-limits" data-scrollspy-target class="h4 text-slate-800 scroll-mt-24 dark:text-slate-200">API limits</h2>
          <p>
            To improve the experience for all our users, we impose some limits on API requests. These limits prevent a single user from making too many expensive calls at once. Exceeding the limits can result in your API access being disabled, so be cognizant of the quantity and complexity of your requests. Currently there are no options to raise the limit on a per-customer basis.
          </p>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-[650] text-slate-800 dark:text-slate-200">Throttling</h3>
          <p>
            The Marketing API has a limit of 10 simultaneous connections. You'll receive a 429 error if you reach the limit. At exceptionally high volumes, you may receive an HTTP 429 or 403 without a JSON body.
          </p>
          <p>
            We recommend that you cache frequently accessed values that do not change often in your application's data store. This will prevent your application from bumping up against the throttling limitations and will likely provide faster access to that data.
          </p>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-[650] text-slate-800 dark:text-slate-200">Stream timeouts</h3>
          <p>
            The Marketing API has a 120-second timeout on API calls. You may see this type of timeout after you've made a network socket connection and are already sending and receiving data.
          </p>
          <p>
            Response times are dependent on the complexity of your request and the general load across Docs. Some endpoints in the Marketing API return values that are large and slow to calculate. Once you know what data you need, use the <a class="text-blue-600 font-medium hover:underline" href="#0">pagination and partial response</a> capabilities to request only what is essential to you.
          </p>
          <div class="text-sm p-4 bg-slate-50 border border-slate-200 rounded dark:bg-slate-800 dark:border-slate-700">
            <div class="flex items-center">
              <svg class="fill-teal-500 shrink-0 mr-4" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8ZM7 11.4 3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4Z" />
              </svg>
              <p>
                Note: You will see the &lt;dc&gt; placeholder or an actual data center subdomain in examples throughout this documentation. Either way, make sure to replace it in your code with the data center subdomain for your account, or your request may generate an error.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocumentationContent',
}
</script>