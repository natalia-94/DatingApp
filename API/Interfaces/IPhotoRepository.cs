namespace API.Interfaces;
public interface IPhotoRepository
    {
        /*
         *  1. GetUnapprovedPhotos
            2. GetPhotoById
            3. RemovePhoto
         
         */
        Task<IEnumerable<PhotoForApprovalDto>> GetUnapprovedPhotos();
        Task<Photo> GetPhotoById(int id);
        void RemovePhoto(Photo photo);
    }
