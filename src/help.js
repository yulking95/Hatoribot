const help = (prefix, sender, pushname, time) => {

	return `
 <══════════════════>
            *HH BOT*
 <══════════════════>
   💪 Comandos prro 💪
  *Todo lo que necesita* 
      ${pushname}?
╭────「 INFO 」───────╮
│                                            
┣⊱ Dueño:                       
│ Hatori Hanzo  
│                                            
┣⊱ Contacto:         
│https://wa.me/51928564603
│                                                                                      
┣⊱ Su link:
│wa.me/${sender.split("@")[0]}   
│                                       
┣⊱ 𝐒𝐓𝐀𝐓𝐔𝐒: ACTIVO    
│                                            
┣⊱ Velocidad:           
│${process.uptime()}         
│                                  
┣⊱ Fecha y hora: ${time}                       
│                                            
┣⊱ Trabajando a:    
│${kyun(uptime)}
│
╰──────────────────────                      
│═༒︎〘 MENU 〙༒︎══
│
┣⊱  **sticker*
┣⊱  **toimg*
┣⊱  **tts*
┣⊱  **leens*
┣⊱  **wait*                
┣⊱  **linkgp*          
┣⊱  **simih*     
┣⊱  **marcar*          
┣⊱  **add*         
┣⊱  **banear*       
┣⊱  **promover*    
┣⊱  **rebajar*        
┣⊱  **admins*          
┣⊱  **marcar2*         
┣⊱  **marcar3*                 
┣⊱  **bloqueados*      
┣⊱  **bloquear*    
┣⊱  **desbloquear* 
┣⊱  **limpiar*          
┣⊱  **bienvenido*  
┣⊱  **clonar*      
┣⊱  **help1*           
┣⊱  **dueño*            
┣⊱  **owner*                    
┣⊱  **setfoto*         
┣⊱  **grupoinfo*       
┣⊱  **ytmp4* 
┣⊱  **play*
┣⊱  **play1*
┣⊱  **play2*
┣⊱  **buendia*          
┣⊱  **buenasnoches*                              
╰────────────────
╭────「 IMÁGENES 」──
│                           
┣⊱  **porno*         
┣⊱  **buenasnoches*      
┣⊱  **buendia*        
┣⊱  **buenasnoches*      
┣⊱  **belle*
┣⊱  **nsfwpatas*
┣⊱  **naruto* 
┣⊱  **nsfwtetas*
╰────────────────
╭─「 INTELIGÊNCIA 」
│                         
┣⊱  **simih 1*            
┣⊱  **simih 0*            
┣⊱  **simi*               
│                         
╰─────────────────
╭───「 PREMIUM 」──╮
│                                
┣⊱  **premiumlist*      
┣⊱  **delete*           
┣⊱  **modapk*             
┣⊱  **chentai*          
┣⊱  **gcpf*             
┣⊱  **gbin*             
┣⊱  **pack*             
┣⊱  **gpersona*          
│                       
╰─────────────────╯
╭──────「 GRUPO 」──╮
│                          
┣⊱  **banear*               
┣⊱  **leveling*   
┣⊱  **level*               
┣⊱  **add*                 
┣⊱  **promover*            
┣⊱  **setfoto*
┣⊱  **setnombre*     
┣⊱  **rebajar*            
┣⊱  **admins*              
┣⊱  **marcar*              
┣⊱  **marcar2*             
┣⊱  **marcar3*             
┣⊱  **bienvenido*      
┣⊱  **grupoinfo*            
┣⊱  **buendia*              
┣⊱  **buenastardes*            
┣⊱  **buenasnoches*            
┣⊱  **setdesc (text)*                             
│                          
╰─────────────────╯
╭───「 ESPECÍFICO 」──╮
│                                  
┣⊱  **clonar*                  
┣⊱  **dueño*                        
┣⊱  **ping*                                            
┣⊱  **wame*
┣⊱. **wa.me*
┣⊱  **setppbot*                                      
┣⊱  **timer*                       
│                                  
╰───────────────────╯
╭──────「 MÁS 」───╮
│                                                                       
┣⊱  **testime*                 
┣⊱  **tomp3*                   
┣⊱  **modoanime*               
┣⊱  **modonsfw*                                  
┣⊱  **nombregp*                                   
┣⊱  **alerta*
┣⊱  **infogp*
┣⊱  **grupoinfo*
╰──────────────────╯
╭──「 COMANDOS DE VOZ 」─
│
┣⊱  **risas*                                              
┣⊱  **sexo*                        
┣⊱  **a*                                                  
┣⊱  **onichan*                                            
┣⊱  **rap1*                       
┣⊱  **rap2*                       
┣⊱  **rap3* 
┣⊱  **op1*
┣⊱  **op2*
┣⊱  **op3*
┣⊱  **op4*
┣⊱  **op5*
┣⊱  **op6*
┣⊱  **op7*
┣⊱  **op8*
┣⊱  **op9*
┣⊱  **op10*
│                                 
╰──────────────────
╭──────「 OTROS/2 」──╮
│                                               
┣⊱  **antilink*             
┣⊱  **antiracismo*    
┣⊱  **setnombrebot*                                                             
╰────────────────────╯
╭──「 SIN PREFIJOS 」──╮
│                            
┣⊱                                            
┣⊱  *gemido*                      
┣⊱  *canta*
┣⊱  *grita*                   
┣⊱  *gime*                   
┣⊱  *yamete*                   
┣⊱  *Pasen porno*                   
┣⊱. *onichan*
│                             
╰──────────────────╯`

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var Horas = Math.floor(seconds / (60*60));
  var Minutos = Math.floor(seconds % (60*60) / 60);
  var Segundos = Math.floor(seconds % 60);
/*┣⊱  **beat1*                      
┣⊱  **beat2*                      
┣⊱  **beat3*                      
┣⊱  **beat4*                      
┣⊱  **beat5*                      
┣⊱  **beat6*                      
┣⊱  **beat7*                      
┣⊱  **beat8*                      
┣⊱  **beat9*                      
┣⊱  **beat10*                     
┣⊱  **beat11*                     
┣⊱  **beat12*                     
┣⊱  **beat13*                     
┣⊱  **beat14*                     
┣⊱  **beat15*                     
┣⊱  **beat16*                     
┣⊱  **beat17*                     
┣⊱  **beat18*                     
┣⊱  **beat19*                     
┣⊱  **beat20*                     
┣⊱  **beat21*                     
┣⊱  **beat22*                     
┣⊱  **beat23*                     
┣⊱  **beat24*                     
┣⊱  **beat25*                     
┣⊱  **trap1*                      
┣⊱  **trap2*                      
┣⊱  **trap3*                      
┣⊱  **trap4*                      
┣⊱  **trap5*                      
┣⊱  **trap6*                      
┣⊱  **trap7*                      
┣⊱  **trap8*                      
┣⊱  **trap9*                      
┣⊱  **trap10*                     
┣⊱  **trap11*                     
┣⊱  **trap12*                     
┣⊱  **trap13*                     
┣⊱  **trap14*                     
┣⊱  **trap15*                     
┣⊱  **trap16*                     
┣⊱  **trap17*                     
┣⊱  **trap18*                     
┣⊱  **trap19*                     
┣⊱  **trap20*                     
┣⊱  **trap21*                     
┣⊱  **trap22*                     
┣⊱  **trap23*                     
┣⊱  **trap24*                     
┣⊱  **trap25*                     
┣⊱  **roc1*                       
┣⊱  **roc2*                       
┣⊱  **roc3*                       
┣⊱  **roc4*                       
┣⊱  **roc5*                       
┣⊱  **roc6*                       
┣⊱  **roc7*                           
┣⊱  **roc8*                       
┣⊱  **roc9*                       
┣⊱  **roc10*                      
┣⊱  **roc11*                      
┣⊱  **roc12*                      
┣⊱  **roc13*                      
┣⊱  **roc14*                      
┣⊱  **roc15*                      
┣⊱  **roc16*                      
┣⊱  **roc17*                      
┣⊱  **roc18*                      
┣⊱  **roc19*                      
┣⊱  **roc20*                      
┣⊱  **roc21*                      
┣⊱  **roc22*                      
┣⊱  **roc23*                      
┣⊱  **roc24*                      
┣⊱  **roc25*                      
┣⊱  **rap1*                       
┣⊱  **rap2* */
  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(Horas)} Horas ${pad(Minutos)} Minutos ${pad(Segundos)} Segundos`

}
}
exports.help = help
