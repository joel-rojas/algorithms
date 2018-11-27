/*
 * Complete the gradingStudents function below.
 */
function gradingStudents(grades) {
    /*
     * Write your code here.
     */
    const newGrades = grades.reduce((arr, val) => {
        const minGrade = 38;
        const multiple = 5;
        const maxDiff = 3;
        if (val >= minGrade) {
            let newGrade = val;
            while (newGrade % multiple !== 0) {
                newGrade++;
            }
            if (newGrade - val < maxDiff) {
                arr.push(newGrade);
            } else {
                arr.push(val);
            }
        } else {
            arr.push(val);
        }  
        return arr;
    }, []);

    return newGrades;
}