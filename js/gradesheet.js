        /*
         Name:       ADEGOKE ADEDAYO ADEFELU
         Date:       01/06/2025
         Project:    Students Grades JavaScript (Week 5 Mini Project)
        */

        /**
         * Calculates the grade based on the score entered in a subject
         *  scoreFieldId - The ID of the input field containing the score
         *  gradeFieldId - The ID of the input field where the grade will be displayed
         */
        function calculateGrade(scoreFieldId, gradeFieldId) 
            {
                // Get the score value from the input field
                var score = parseFloat(document.getElementById(scoreFieldId).value);
            
                // Get the grade field element
                var gradeField = document.getElementById(gradeFieldId);

                        
                // Calculate the grade based on the score
                if (isNaN(score)) 
                {
                    gradeField.value = '';
                    return;
                }
            
                 if (score < 40) 
                {
                    gradeField.value = 'F';
                    gradeField.style.color = '#e74c3c'; // Red for fail
                } 
                  else if (score >= 40 && score < 45) 
                {
                    gradeField.value = 'E';
                    gradeField.style.color = '#e67e22'; // Orange
                } 
                  else if (score >= 45 && score < 50) 
                {
                    gradeField.value = 'D';
                    gradeField.style.color = '#f39c12'; // Yellow
                } 
                  else if (score >= 50 && score < 60) 
                {
                    gradeField.value = 'C';
                    gradeField.style.color = '#3498db'; // Blue
                } 
                  else if (score >= 60 && score <= 69) 
                {
                    gradeField.value = 'B';
                    gradeField.style.color = '#2ecc71'; // Green
                } 
                   else if (score >= 70) 
                {
                    gradeField.value = 'A';
                    gradeField.style.color = '#2ecc71'; // Green
                }
            }
        
        /**
         * Calculates and displays the total score, average, and remarks
         */
        function calculateResults()
        {
            // Get all the score values
            var englishScore = parseFloat(document.getElementById('txtEnglish').value) || 0;
            var mathsScore = parseFloat(document.getElementById('txtMaths').value) || 0;
            var chemistryScore = parseFloat(document.getElementById('txtChemistry').value) || 0;
            var biologyScore = parseFloat(document.getElementById('txtBiology').value) || 0;
            var frenchScore = parseFloat(document.getElementById('txtFrench').value) || 0;
            
            // Calculate total and average
            var total = englishScore + mathsScore + chemistryScore + biologyScore + frenchScore;
            var average = total / 5;
            
            // Display the results
            document.getElementById('pTotal').innerText = total;
            document.getElementById('pAverage').innerText = average.toFixed(2);
            
            // Determine and display remarks
            var remarksElement = document.getElementById('pRemarks');
            if (average > 50) {
                remarksElement.innerHTML = '<span class="emoji">🎉👍🎉👏🏽👏🏽👏🏽</span><span class="passed">Remarks: Passed - Congratulations on your Performance!</span>';
            } else {
                remarksElement.innerHTML = '<span class="emoji">😞👎🏽👎🏽👎🏽</span><span class="failed">Remarks: Failed - You disappointed yourself, teachers, and parents!</span>';
            }
        }