ionic cordova build android --prod --release
#keytool -genkey​​ -v -keystore​​ platforms/android/android-key​.jks​​ -keyalg​​ RSA -keysize​​ 2948 -validity 10000 -alias​​ android-key
#appZukkin
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore platforms/android/android-key​.jks​​ platforms/android/build/outputs/apk/android-release-unsigned.apk android-key
rm platforms/android/build/outputs/apk/appZukkin.apk
zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk platforms/android/build/outputs/apk/appZukkin.apk

