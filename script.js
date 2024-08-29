function calculateDiet() {
    // Get user inputs
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;

    // Calculate BMI
    const bmi = weight / (height * height);

    // Calculate BMR (Basal Metabolic Rate) using Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height * 100 + 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height * 100 + 5 * age - 161;
    }

    // Calculate daily caloric needs (assuming sedentary activity level)
    const caloricNeeds = bmr * 1.2;

    // Provide a basic recommendation based on BMI
    let recommendation;
    let dietplan = '';
    if (bmi < 18.5) {
        recommendation = 'Underweight: Consider increasing calorie intake with nutritious foods.';
        dietplan = encodeURIComponent(`
<p><b> Breakfast:</b></p>
<p>Masala Dosa: A large masala dosa (rice and lentil crepe stuffed with spiced potatoes) served with coconut chutney and sambar (a lentil-based vegetable stew).</p>
<p>Milk or Buttermilk: A glass of whole milk or buttermilk (spiced yogurt drink) for added calories and probiotics.</p>

<p><b>Lunch:</b></p>
<p>Sambar Rice: A hearty rice dish cooked with sambar (a mix of lentils, vegetables, and spices) for added protein and nutrients.
</p>
<p>Vegetable Kootu: A side of vegetable kootu (a mixed vegetable and lentil stew) for extra vitamins and minerals.</p>
<p>Curd Rice: A bowl of curd rice (rice mixed with yogurt and tempered with mustard seeds, curry leaves, and green chilies) for probiotics and ease of digestion.</p>

<p><b>Snack:</b></p>
<p>Sundal: A savory snack made from boiled chickpeas or lentils, tempered with mustard seeds, curry leaves, and grated coconut.</p>
<p>Nuts and Seeds: A handful of roasted nuts (cashews, peanuts) and seeds (sunflower or pumpkin seeds).</p>

<p><b>Dinner:</b></p>
<p>Idiyappam with Stew: Steamed rice noodles (idiyappam) served with a coconut-based vegetable stew or chicken stew.</p>
<p>Chapati: Whole-wheat chapati with a side of vegetable curry or dal for additional protein and fiber.</p>

<p><b>Evening Snack:</b></p>
<p>Payasam: A sweet South Indian dessert made from rice, milk, sugar, and flavored with cardamom and garnished with nuts.</p>
<p>Fruit: A serving of fruit like bananas or mangoes for added vitamins and calories</p>

<p><b>Additional Tips:</b></p>
<p>Healthy Fats: Use coconut oil or ghee in cooking to increase calorie intake.</p>
<p>Protein Sources: Incorporate protein-rich foods like lentils, chickpeas, and dairy products.</p>
<p>Caloric Density: Focus on calorie-dense foods like nuts, seeds, and full-fat dairy products.
</p>

        `);
    } else if (bmi < 24.9) {
        recommendation = 'Normal weight: Maintain your current diet and activity levels.';
        dietplan = encodeURIComponent(`
            <p><b> Breakfast:</b></p>
            <p>Vegetable Upma: A savory dish made from semolina (rava) with mixed vegetables (carrots, peas, beans) and tempered with mustard seeds, urad dal, and curry leaves.</p>
            <p>Sambar: A small bowl of sambar (lentil and vegetable stew) for added protein and fiber.</p>
            <p>Fresh Fruit: A serving of fruit like a banana or an apple for vitamins and natural sugars.</p>
            
            <p><b>Lunch:</b></p>
            <p>Rice and Sambar: A serving of steamed rice with a bowl of sambar. You can add a side of vegetable poriyal (a stir-fried vegetable dish).</p>
            <p>Curd Rice: A bowl of curd rice (rice mixed with yogurt and tempered with mustard seeds, curry leaves, and green chilies).</p>
            <p>Salad: A fresh salad with cucumber, tomatoes, and carrots, seasoned with lemon juice and a pinch of salt.
</p>
            
<p><b>Snack:</b></p>
            <p>Sundal: A protein-rich snack made from boiled chickpeas or lentils, tempered with mustard seeds, curry leaves, and grated coconut.</p>
            <p>Tea or Coffee: A cup of South Indian filter coffee or tea, with minimal sugar and milk.</p>
                      
            <p><b>Dinner:</b></p>
            <p>Idli with Coconut Chutney: Steamed rice and lentil cakes (idli) served with a side of coconut chutney and sambar.</p>
            <p>Vegetable Curry: A light vegetable curry made with minimal oil, using vegetables like spinach, beans, and potatoes.
</p>
            <p>Chapati: Whole-wheat chapati as an alternative or addition to rice, paired with vegetable curry.
</p>
         
            <p><b>Evening Snack:</b></p>
            <p>Fruit Smoothie: Blend a small banana with a cup of milk or yogurt, and a handful of berries if available.</p>
            <p>Nuts: A small handful of mixed nuts (almonds, cashews) for added healthy fats and protein.
</p>
            
            <p><b>Additional Tips:</b></p>
            <p>Balanced Nutrition: Ensure each meal includes a good mix of carbohydrates, proteins, and healthy fats.</p>
            <p>Portion Control: Maintain portion sizes that suit your activity level and metabolic rate.
</p>
            <p>Hydration: Drink plenty of water throughout the day, and consider including herbal teas or coconut water.
</p>
`);            
    } else if (bmi < 29.9) {
        recommendation = 'Overweight: Consider a balanced diet and regular exercise.';
        dietplan = encodeURIComponent(`
            <p><b> Breakfast:</b></p>
            <p></p>
            <p></p>
            <p></p>
                       
            <p><b>Lunch:</b></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
                       
            <p><b>Snack:</b></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
                       
            <p><b>Dinner:</b></p>
            <p></p>
            <p></p>
            <p></p>
                        
            <p><b>Evening Snack:</b></p>
            <p></p>
            <p></p>
            <p></p>
                      
            <p><b>Additional Tips:</b></p>
            <p></p>
            <p></p>
            <p></p>
`);            
    } else {
        recommendation = 'Obese: Consult a healthcare provider for a personalized diet plan.';
        dietplan = encodeURIComponent(`
            <p><b> Breakfast:</b></p>
            <p></p>
            <p></p>
            <p></p>
            <h5>Food List:</h5>
            <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
            
            <p><b>Lunch:</b></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <h5>Food List:</h5>
            <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
            
            <p><b>Snack:</b></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <h5>Food List:</h5>
            <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
            
            <p><b>Dinner:</b></p>
            <p></p>
            <p></p>
            <p></p>
            <h5>Food List:</h5>
            <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
            
            <p><b>Evening Snack:</b></p>
            <p></p>
            <p></p>
            <p></p>
            <h5>Food List:</h5>
            <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
            
            <p><b>Additional Tips:</b></p>
            <p></p>
            <p></p>
            <p></p>
`);            
    }

    // Redirect to the results page with URL parameters
    const resultsPage = 'result.html';
    const params = new URLSearchParams({
        bmi: bmi.toFixed(2),
        bmr: bmr.toFixed(2),
        caloricNeeds: caloricNeeds.toFixed(2),
        recommendation: recommendation,
        dietplan: dietplan
    }).toString();

    window.location.href = `${resultsPage}?${params}`;
}
