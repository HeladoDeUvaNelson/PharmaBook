import fs from "fs";
import { publicEncrypt, privateDecrypt } from "crypto";
import { parseKey, parsePrivateKey } from "sshpk";
import dotenv from "dotenv";

dotenv.config();

const SHA: string | undefined = process.env.SHA;

export const encryptString = (plaintext: string, publicKeyFile: string) => { 
    const publicKey = fs.readFileSync(publicKeyFile, "utf8"); 

    const pemKey = parseKey(publicKey, 'ssh');
    const cypherText = publicEncrypt(pemKey.toBuffer("pem"), Buffer.from(plaintext, 'utf8'));

    return cypherText.toString("base64"); 
} 

export const decryptString = (privateKeyFile: string, cypherText: string) => { 
    const privateKey = fs.readFileSync(privateKeyFile, "utf8"); 

    const pemKey = parsePrivateKey(privateKey, 'ssh');

    const decryptMess = privateDecrypt(pemKey.toBuffer("pem"), Buffer.from(cypherText, "base64"))
   
    return decryptMess.toString("utf8");
}
