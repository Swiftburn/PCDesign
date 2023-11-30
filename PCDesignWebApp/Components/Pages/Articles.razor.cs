/**
 * @file Articles.razor.cs
 * @author Adolfo Barrientos (badolfo4@gmail.com)
 * @brief This file provides the c# for the Articles portion of the web application. 
 * @version 0.21
 * @date 2023-11-11
 * 
 * @copyright Copyright (c) 2023
 * 
 */

public partial class Articles
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public DateTime LastModified { get; set; }
}
