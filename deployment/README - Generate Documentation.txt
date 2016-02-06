Generate Documentation
Requirements
--------------------------------
apidoc (http://apidocjs.com/)

Steps
1. If making changes to an existing api which require a version changes
    1.1 Copy the apidoc comment block to _apidoc.js (create file if neccessary) to keep history
    1.2 Update @apiVersion on the affected block
2. Open command prompt and navigate to the KFQuery folder
3. Run "apidoc -e node_modules/"