import { useState, useRef } from "react";
import PrimaryInput from "../components/PrimaryInput";
import MyButton from "../components/MyButton";
import { addImageIcon } from "../assets/icons";

const PostBookAd = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  const [formData, setFormData] = useState<any>({
    bookName: "",
    publishedYear: "",
    genre: "",
    author: "",
    condition: "New",
    description: "",
    price: "",
    websiteUrl: "",
    images: [null, null, null, null], // Initialize with 4 null slots
  });

  const conditions = ["New", "Like New", "Good", "Fair", "Poor"];

  // Handle input change
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleImageUpload = (e: any) => {
    const file = e.target.files?.[0];
    if (file && selectedSlot !== null) {
      const imageUrl = URL.createObjectURL(file);
      const newImages = [...formData.images];
      newImages[selectedSlot] = imageUrl;
      setFormData({ ...formData, images: newImages });
    }
  };

  // Handle image slot click
  const handleSlotClick = (index: number) => {
    setSelectedSlot(index);
    fileInputRef.current?.click();
  };

  // Remove image from specific slot
  const removeImage = (index: any) => {
    const newImages = [...formData.images];
    newImages[index] = null;
    setFormData({ ...formData, images: newImages });
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className='min-h-screen flex justify-center py-12'>
      <div className="w-[90%] flex flex-col container mx-auto md:w-[55%] bg-white">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold mb-2">Post Book Ad</h2>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          {/* Book Name and Author */}
          <div className="flex w-full gap-4">
            <div className="flex-1">
              <PrimaryInput
                value={formData.bookName}
                onChange={handleChange}
                name="bookName"
                isRequired={true}
                label="Book Name"
                type="text"
                placeholder="Enter Book Name"
                icon="fa-book"
              />
            </div>
            <div className="flex-1">
              <PrimaryInput
                value={formData.author}
                onChange={handleChange}
                name="author"
                isRequired={true}
                label="Author"
                type="text"
                placeholder="Enter Author Name"
                icon="fa-user"
              />
            </div>
          </div>

          {/* Published Year and Genre */}
          <div className="flex w-full gap-4">
            <div className="flex-1">
              <PrimaryInput
                value={formData.publishedYear}
                onChange={handleChange}
                name="publishedYear"
                isRequired={true}
                label="Published Year"
                type="number"
                placeholder="Enter Published Year"
                icon="fa-calendar"
              />
            </div>
            <div className="flex-1">
              <PrimaryInput
                value={formData.genre}
                onChange={handleChange}
                name="genre"
                isRequired={true}
                label="Genre"
                type="text"
                placeholder="Enter Genre"
                icon="fa-bookmark"
              />
            </div>
          </div>

          {/* Price and Website URL */}
          <div className="flex w-full gap-4">
            <div className="flex-1">
              <PrimaryInput
                value={formData.price}
                onChange={handleChange}
                name="price"
                isRequired={true}
                label="Price"
                type="number"
                placeholder="Enter Price"
                icon="fa-dollar-sign"
              />
            </div>
            <div className="flex-1">
              <PrimaryInput
                value={formData.websiteUrl}
                onChange={handleChange}
                name="websiteUrl"
                label="Website URL"
                type="url"
                placeholder="Enter Website URL"
                icon="fa-link"
              />
            </div>
          </div>
 {/* Image Upload */}
 <div className="w-full flex flex-col gap-2">
            <label className="font-medium block mb-1">Upload Images</label>
            <p className="text-sm text-gray-500">Share Your Book: Upload up to 4 images!</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  onClick={() => handleSlotClick(index)}
                  className="relative h-36 bg-bgSecondary flex flex-col items-center justify-center border border-dashed rounded cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  {formData.images[index] ? (
                    <>
                      <img 
                        src={formData.images[index]} 
                        alt={`Book ${index + 1}`} 
                        className="w-full h-full object-cover rounded"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeImage(index);
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center"
                      >
                        <i className="fas fa-times text-sm"></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <img src={addImageIcon} alt="Upload" className="w-12 h-12 object-cover rounded" />
                      <span className="text-sm text-gray-500 mt-2">Add Image</span>
                    </>
                  )}
                </div>
              ))}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
          {/* Condition Dropdown */}
          <div className="w-full">
            <label className="font-medium block mb-1">Condition</label>
            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-bgSecondary text-textSecondary outline-none"
            >
              {conditions.map((cond) => (
              <option key={cond} value={cond}>{cond}</option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="w-full">
            <label className="font-medium block mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write about your book..."
              className="w-full p-2 border-none  bg-bgSecondary rounded h-32 outline-none resize-none"
            />
          </div>

         

          {/* Submit Button */}
          <div className="space-y-3 w-fit">
            <MyButton
              type="submit"
              btnText="Post Book"
              style="bg-bgPrimary py-2 text-lg px-20 py-3 capitalize"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostBookAd;
