#pragma strict

var rb : Rigidbody = null;
var speed : float = 0f;
var score : int = 0;
var scoreText : UI.Text;

var moveHorizontal : float;
var moveVertical : float;

function Start () {
    rb = GetComponent.<Rigidbody>();
    speed = 10f;
    score = 0;
    updateScoreText(); 
}

function Update () {

}

function FixedUpdate () {
    #if UNITY_EDITOR
        moveHorizontal = Input.GetAxis('Horizontal');
        moveVertical  = Input.GetAxis('Vertical');
        speed = 10f;
    #endif
    
    #if UNITY_ANDROID
        moveHorizontal = Input.acceleration.x;
        moveVertical  = Input.acceleration.y;
        speed = 50f;
    #endif

    #if UNITY_IOS
        moveHorizontal = Input.acceleration.x;
        moveVertical  = Input.acceleration.y;
        speed = 50f;
    #endif
    var movement = Vector3(moveHorizontal, 0.0f, moveVertical);
    rb.AddForce(movement*speed, ForceMode.Force); 

} 

function OnTriggerEnter (other : Collider) {
     if(other.gameObject.CompareTag("PickUp")){
        other.gameObject.SetActive(false);
        score = score + 1;
        updateScoreText();
    }
}

function updateScoreText () {
    scoreText.text = "Score: " +  score.ToString();
}