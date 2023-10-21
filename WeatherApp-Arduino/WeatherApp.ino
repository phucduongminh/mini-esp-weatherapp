#include <FirebaseESP8266.h>

#include <ESP8266WiFi.h>

//board esp8266 ver 2.7.x
//firebaseesp8266 ver 3.11.6
//arduinoJSON ver5.13.5
#define FIREBASE_HOST "database link"
#define FIREBASE_AUTH "apiKey"

#define WIFI_SSID ""
#define WIFI_PASSWORD ""

WiFiClient wifiClient;
FirebaseData firebaseData;

void connectToWiFi()
{

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(500);
  }
  Serial.println("\nConnected to WiFi");
  delay(3000);
}

void setup()
{

  Serial.begin(115200);

  connectToWiFi();

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

void loop()
{

  float temperature = 32;
  float humidity = 10;
  float pressure = 29;

  
    if (Firebase.ready())
  {
    Firebase.setFloat(firebaseData, "/temp", temperature);
    Firebase.setFloat(firebaseData, "/humidity", humidity);
    Firebase.setFloat(firebaseData, "/pressure", pressure);
  }
  else
  {
    Serial.println("Firebase not ready");
  }

  delay(5000);
}