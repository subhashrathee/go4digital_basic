### Base site template.

### requirements
- node v8+

### usage

### run
-- dev:
- npm run dev (serve site on localhost:3000)
- Actual site needs config.json with the following values:
-- { "emailjs_user": "", "emailjs_service_id":"", "emailjs_template_id":""} 

--prod:
npm run build
npm start (serve site on localhost:5000)
### content
content is stored in json data files as html:
src/modules/config

### storybook
- npm run storybook (serves storybook on localhost:9001)

### test coverage
- npm run test (snapshot and enzyme tests)
- npm run testcoverage (test coverage analysis)
