import React, { useState, useEffect } from "react";
import "../assets/Journal.css";
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';
import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
// import ContentPasteSearchRoundedIcon from '@material-ui/icons/ContentPasteSearchRounded';
// import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
// import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import db from "../firebase";


function Journal() {
    const [entry, setEntry] = useState(true);
    const [search, setSearch] = useState(false);

    const [log, setLog] = useState([]);
    let [number, setNumber] = useState(1);
    const [date, setDate] = useState('2022-01-01');
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [paid, setPaid] = useState(0);
    const [balance, setBalance] = useState(0);
    const [error, setError] = useState('');
    const [error2, setError2] = useState('');

    const open1 = (e) => {
        e.preventDefault();

        setEntry(false)
        setSearch(true)
    }
    const open2 = (e) => {
        e.preventDefault();

        setEntry(true)
        setSearch(false)
    }

    const parse = (e) => {
        e.preventDefault();
    }

    const register = (e) => {
        e.preventDefault();
        
        if (date) {
            if (id.length === 10 || id.length === 11) {
                if (name.length > 3 ) {
                    if (amount) {
                        let difference = (paid - amount)
                        setBalance(difference)
        
                        {
                                db.collection("journal").add({
                                date: date,
                                name: name,
                                phone: id,
                                amount: amount,
                                paid: paid,
                                balance: difference,
                                });
                            }
                        
                            setDate("'2020-08-22'");
                            setId(0);
                            setName("");
                            setAmount(0);
                            setPaid(0);
                            setBalance(0);
                            setError('');
                    }
                    else {
                        setError('Pls fill Amount input field correctly');
                    }
                }
                else{
                    setError('Pls fill Name input field correctly');
                }
            }
            else{
                setError("Pls fill Phone input field correctly")
                
            }
        }
        else{
            setError("Pls fill Date input field correctly")
        }
      };
      
      useEffect(() => {
        // Code..
        db.collection("journal")
        .orderBy("date", "asc").onSnapshot((snapshot) =>
          setLog(snapshot.docs.map((doc) => doc.data()))
        );

      }, []);

  return (
    <div className="journal">
        {/* Entry */}
        <h3  
        className={`pointer flex-r ${entry && "log--active flex-r"}`}
         onClick={open2}>Entry <MenuBookRoundedIcon className="marL"/> </h3>
        {
            entry &&

        <form className="log">
            <table>

                <tr>
                    <td>
                        <label>Date <EventRoundedIcon/> </label>
                        <input name='date' type='date'
                            min='2022-01-01'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </td>
                    <td>
                        <label>Phone <PhoneRoundedIcon/> </label>
                        <input name='id' type='tel' placeholder='080------'
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </td>
                    <td>
                        <label>Name <PermIdentityRoundedIcon/></label>
                        <input name='name' type='text' placeholder='John Doe'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </td>
                    <td>
                        <label>Amount <MonetizationOnRoundedIcon/> </label>
                        <input name='amount' type='number' placeholder='0.00'
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </td>
                    <td>
                        <label>Paid <ReceiptRoundedIcon/> </label>
                        <input name='paid' type='number' placeholder='0.00'
                             value={paid}
                             onChange={(e) => setPaid(e.target.value)}
                        />
                    </td>
                   
                </tr>
                <tr>
                    <button type='submit' onClick={register}>Submit</button>
                </tr>

                
                    { error &&  
                    <tr>
                        <h4 className="errorMessage">{error}</h4>
                    </tr>
                    }
            </table>
        </form>
        }

        {/* Search */}
        <div className="searcher">
            <h3  className={`pointer flex-r ${search && "log--active flex-r"}`} onClick={open1}>Search 
            {/* <ContentPasteSearchRoundedIcon className="marL"/>  */}
            </h3>
            {
                search &&
            <form className="log">
            <table>

                <tr>
                    <td>
                        <label>Date <EventRoundedIcon/> </label>
                        <input name='date' type='date'
                            min='2022-01-01'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </td>
                    <td>
                        {/* <label>Phone <PhoneRoundedIcon/> </label> */}
                        <div className="flex-r">
                            <select name="search" className="searchMenu">
                                <option value='name'>Name</option>
                                <option value='phone'>Phone</option>
                                <option value='amount'>Amount</option>
                                <option value='paid'>Paid</option>
                            </select>
                            <SearchRoundedIcon className="searchIcon"/>
                        </div>
                        <input name='searchValue' type='text' placeholder='Search'
                            // value={id}
                            // onChange={(e) => setId(e.target.value)}
                        />
                    </td>
                   
                </tr>
                <tr>
                    <button type='submit' 
                    onClick={parse}
                    >Search</button>
                </tr>

                
                    { error &&  
                    <tr>
                        <h4 className="errorMessage">{error2}</h4>
                    </tr>
                    }
            </table>
            </form>
            }
        </div>

        <h3 className="log--active flex-r">Log book
         {/* <ReceiptLongRoundedIcon className="marL"/>  */}
         </h3>
        <table className="book">
            <tr>
                <th>S/N</th>
                <th>Date</th>
                <th>Phone</th>
                <th>Name</th>
                <th>Amount (#:k)</th>
                <th>Paid (#:k)</th>
                <th>Balance (#:k)</th>
            </tr>

            
            {log.map((log) =>  (                       
                <tr
                 >
                    <td>
                        {number ++}.
                    </td>
                    <td>
                        {log.date}
                    </td>
                    <td>
                        {log.phone}
                    </td>
                    <td>
                        {log.name}
                    </td>
                    <td>
                         {log.amount}.00 
                    </td>
                    <td>
                        {log.paid}.00 
                    </td>
                    <td>
                         {log.balance}.00 
                    </td>           
                </tr>                     
                   
                ))}

        </table>
    </div>
  )
}

export default Journal