#pragma strict

function Start () {

}

function Update () {
    transform.Rotate(Vector3(15, 33, 45) * Time.deltaTime);
}