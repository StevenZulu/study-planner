$(function (){
    $('#submit-1').click(function (){
        let remainingDays = $('#remaining-days').val();
        let numberOfSubjects = $('#number-of-subjects').val();

        daysPerSubject = Math.round( parseInt(remainingDays) / parseInt(numberOfSubjects) );
        
        if(remainingDays !== '' && numberOfSubjects !== ''){
            $('#r-days').html(remainingDays);
            $('#subjects').html(numberOfSubjects);
            $('#days-per-subject').html(daysPerSubject);
            $('#plan-suggestions').slideDown(5000);
        }
    })
    
    $('#submit-2').click(function (){
        let subjectName = $('#subject').val();
        let numberOfTopics = $('#topics').val();
        
        if(subjectName !== '' && numberOfTopics !== '' ){
            $('#results-2').fadeIn(5000);
            let topicsPerDay = parseInt(numberOfTopics) / daysPerSubject;
            topicsPerDay = topicsPerDay.toFixed(1);
            
           $('#t-topics').html(topicsPerDay);
           $('#subject-name').html(subjectName);
           $('#days-p-subject').html(daysPerSubject);
       }
    })
})

//Used my phone to code, codes my be badly formatted. 
//Please help me write cleaner code, by sending me your suggestions.
//Email: stevenzulu123@gmail.com
