
import { generateKeyPairSync } from 'crypto';
import { writeFileSync } from 'fs';
function genKeyPair() {
    const type = 'ec'
    const keyPair = generateKeyPairSync(type, {
        namedCurve: 'SM2',
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem'
        }
    });
    writeFileSync(`${__dirname}/id_${type}_public.pem`, keyPair.publicKey);
    writeFileSync(`${__dirname}/id_${type}_private.pem`, keyPair.privateKey);
}
genKeyPair();