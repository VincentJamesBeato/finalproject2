const Expert = () => {
    return ( 
        <div className="row" style={{gap: 20}}>
            <div class="card border-primary mb-3" style={{maxWidth: '18rem'}}>
                <div class="card-header">Weighted Push-Ups</div>
                <div class="card-body text-primary">
                    <h5 class="card-title">Muscles Worked: Chest, Shoulders, Triceps</h5>
                    <p class="card-text">Sets: 5</p>
                    <p class="card-text">Reps: 15</p>
                    <p class="card-text">Equipment: Weighted Vest</p>
                </div>
            </div>

            <div class="card border-primary mb-3" style={{maxWidth: '18rem'}}>
                <div class="card-header">Deadlifts</div>
                <div class="card-body text-primary">
                    <h5 class="card-title">Muscles Worked: Lower Back, Glutes, Hamstrings</h5>
                    <p class="card-text">Sets: 5</p>
                    <p class="card-text">Reps: 5</p>
                    <p class="card-text">Equipment: Barbell, Plates</p>
                </div>
            </div>

            <div class="card border-primary mb-3" style={{maxWidth: '18rem'}}>
                <div class="card-header">Burpee Pull-Ups</div>
                <div class="card-body text-primary">
                    <h5 class="card-title">Equipment: Pull-Up Bar</h5>
                    <p class="card-text">Sets: 4</p>
                    <p class="card-text">Reps: 10</p>
                    <p class="card-text">Equipment: Pull-Up Bar</p>
                </div>
            </div>

            <div class="card border-primary mb-3" style={{maxWidth: '18rem'}}>
                <div class="card-header">Barbell Rows</div>
                <div class="card-body text-primary">
                    <h5 class="card-title">Muscles Worked: Back, Biceps</h5>
                    <p class="card-text">Reps: 8</p>
                    <p class="card-text">Reps: 8</p>
                    <p class="card-text">Equipment: Barbell</p>
                </div>
            </div>

            <div class="card border-primary mb-3" style={{maxWidth: '18rem'}}>
                <div class="card-header">Pistol Squats</div>
                <div class="card-body text-primary">
                    <h5 class="card-title">Muscles Worked: Quads, Glutes, Hamstrings</h5>
                    <p class="card-text">Sets: 4</p>
                    <p class="card-text">Reps: 6 (each leg)</p>
                    <p class="card-text">Equipment: None</p>
                </div>
            </div>
        </div>
     );
}
 
export default Expert;