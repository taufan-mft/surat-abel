import React, { useState } from 'react';
import Typing from 'react-typing-animation';
import styles from '../styles/Letter.module.css';

export default function LetterPage() {
    const [showCat, setShowCat] = useState(false);
    return(
        <div className={styles.container}>
            <Typing hideCursor={true} speed={100} onFinishedTyping={() => setShowCat(true)}>
                <p>Hai Abel!</p>
                <p>Makasih banget udah mau maafin Topan! Kalo kamu gamau maafin, gamungkin kamu bisa baca surat ini heheheh.
                <br />
                    Gimana kabar kamu selama ini? Apakah baik-baik aja? Semoga baik-baik aja yah. Aku gabisa tahu kabar kamu. Jadi cuma bisa berharap kamu baik-baik aja.
                    <br />
                    Maafin Topan kemaren yah Abel. Topan emang salah. Ga bakal Topan ulangin lagi. Janji.
                    <br />
                    Topan kangen kamu tau :( Tiap hari selalu keingetan terus. Mau pagi, siang, malem, bahkan lagi mimpi pasti keinget wkwkw :(
                    <br />
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    I know flowers can't fix everything. But I hope that you know I love you.
                    <br />
                    Udahan dong marahannya yang... Topan pengen baikan lagi sama Abel..
                    <br />
                    Apalagi Justin mau konser. Kita harus pesen tiket yang, heheh.
                    <br/>
                    Aku sayang kamu banget. Love you yang.
                    <br />
                    Dari, Topan.
                </p>
            </Typing>
            {showCat && <img src="https://i.ytimg.com/vi/hpKohGV17wc/hqdefault.jpg"/>}

        </div>);
}